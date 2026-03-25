import axios from "axios";
import { NextResponse } from "next/server";
import { UMAMI_ACCOUNT } from "@/constants/umami";

const { api_key, endpoint, base_url, parameters, websites } = UMAMI_ACCOUNT;

const getWebsiteIdByDomain = (domain: string) => {
  const found = websites.find((w) => w.domain === domain);
  return found?.website_id;
};

const getPageViewsByDataRange = async (website_id: string) => {
  const url = `${base_url}/${website_id}${endpoint.page_views}`;

  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "x-umami-api-key": api_key || "",
    },
    params: parameters,
  });

  return response.data;
};

const getWebsiteStats = async (website_id: string) => {
  const url = `${base_url}/${website_id}${endpoint.sessions}`;

  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "x-umami-api-key": api_key || "",
    },
    params: {
      startAt: parameters.startAt,
      endAt: parameters.endAt,
    },
  });

  return response.data;
};

const mergeData = (allResults: any[]) => {
  const combined = {
    pageviews: [],
    sessions: [],
    websiteStats: {
      pageviews: { value: 0 },
      visitors: { value: 0 },
      visits: { value: 0 },
      countries: { value: 0 },
      events: { value: 0 },
    },
  };

  allResults.forEach((result) => {
    combined.websiteStats.pageviews.value += result.websiteStats.pageviews.value;
    combined.websiteStats.visitors.value += result.websiteStats.visitors.value;
    combined.websiteStats.visits.value += result.websiteStats.visits.value;
    combined.websiteStats.events.value += result.websiteStats.events.value;
    combined.websiteStats.countries.value = Math.max(
      combined.websiteStats.countries.value,
      result.websiteStats.countries.value
    );

    const mergeChart = (target: any[], source: any[]) => {
      source.forEach((item) => {
        const existing = target.find((p) => p.x === item.x);
        if (existing) {
          existing.y += item.y;
        } else {
          target.push({ ...item });
        }
      });
    };

    mergeChart(combined.pageviews, result.pageviews);
    mergeChart(combined.sessions, result.sessions);
  });

  combined.pageviews.sort(
    (a: any, b: any) => new Date(a.x).getTime() - new Date(b.x).getTime()
  );
  combined.sessions.sort(
    (a: any, b: any) => new Date(a.x).getTime() - new Date(b.x).getTime()
  );

  return combined;
};

export async function GET() {
  try {
    const results = await Promise.all(
      websites.map(async (w) => {
        const website_id = getWebsiteIdByDomain(w.domain);
        if (!website_id) return null;

        const pv = await getPageViewsByDataRange(website_id);
        const st = await getWebsiteStats(website_id);

        return {
          pageviews: pv?.pageviews || [],
          sessions: pv?.sessions || [],
          websiteStats: st || {
            pageviews: { value: 0 },
            visitors: { value: 0 },
            visits: { value: 0 },
            countries: { value: 0 },
            events: { value: 0 },
          },
        };
      })
    );

    const filtered = results.filter(Boolean);
    const merged = mergeData(filtered as any[]);

    return NextResponse.json({
      status: 200,
      data: merged,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 500,
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}