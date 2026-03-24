import { GITHUB_ACCOUNTS } from "@/constants/github";
import axios from "axios";
import { NextResponse } from "next/server";

const GITHUB_USER_ENDPOINT = "https://api.github.com/graphql";

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    login
    name
    bio
    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
      totalCount
      edges {
        node {
          id
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
        }
      }
    }
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export async function GET(){
  try {
    const {username, token} = GITHUB_ACCOUNTS

    const res = await axios.post(GITHUB_USER_ENDPOINT, {
      query: GITHUB_USER_QUERY,
      variables: { username },
    }, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    if (res.data.errors) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub data" },
        { status: 500 },
      );
    }

    return NextResponse.json(res.data.data.user, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}