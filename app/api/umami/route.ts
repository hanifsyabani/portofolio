import axios from "axios";
import { NextResponse } from "next/server";
import { UMAMI_ACCOUNT } from "@/constants/umami";

const { api_key, endpoint, base_url, parameters, websites } = UMAMI_ACCOUNT;

const website = websites[0];

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

export async function GET() {
  try {
    if (!website?.website_id) {
      return NextResponse.json(
        {
          status: 404,
          error: "Website ID not found",
        },
        { status: 404 }
      );
    }

    const [pv, st] = await Promise.all([
      getPageViewsByDataRange(website.website_id),
      getWebsiteStats(website.website_id),
    ]);

    return NextResponse.json({
      status: 200,
      data: {
        pageviews: pv?.pageviews || [],
        sessions: pv?.sessions || [],
        websiteStats: st || {
          pageviews: { value: 0 },
          visitors: { value: 0 },
          visits: { value: 0 },
          countries: { value: 0 },
          events: { value: 0 },
        },
      },
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