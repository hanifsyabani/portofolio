import { NextResponse } from "next/server";

export async function GET() {
  try {
    const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;

    if (!WAKATIME_API_KEY) {
      return NextResponse.json(
        { error: "Wakatime API key is missing from environment variables." },
        { status: 500 }
      );
    }

    const encodedKey = Buffer.from(WAKATIME_API_KEY).toString("base64");

    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${encodedKey}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 } // Cache for 1 hour to prevent hitting API limits
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch WakaTime stats." },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
