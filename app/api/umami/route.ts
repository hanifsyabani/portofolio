import axios from "axios";
import { NextResponse } from "next/server";
import { UMAMI_ACCOUNT } from "@/constants/umami";

const { api_key, endpoint, base_url, parameters, websites } = UMAMI_ACCOUNT;

const website = websites[0];


export async function GET() {
  try {
    if (!website?.website_id) {
      return NextResponse.json(
        { status: 404, error: "Website ID not found" },
        { status: 404 }
      );
    }

    const params = {
      ...parameters,
      startAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
      endAt: Date.now(),
    };

    const [pv, st] = await Promise.all([
      axios.get(`${base_url}/${website.website_id}${endpoint.page_views}`, {
        headers: {
          Accept: "application/json",
          "x-umami-api-key": api_key || "",
        },
        params,
      }),
      axios.get(`${base_url}/${website.website_id}${endpoint.sessions}`, {
        headers: {
          Accept: "application/json",
          "x-umami-api-key": api_key || "",
        },
        params,
      }),
    ]);

    return NextResponse.json({
      status: 200,
      data: {
        pageviews: pv.data?.pageviews || [],
        sessions: st.data?.sessions || [], // ✅ FIX
        websiteStats: st.data || {
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