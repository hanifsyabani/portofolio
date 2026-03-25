export const UMAMI_ACCOUNT = {
  username: "Muhammad Hanif Sya'bani",
  api_key: process.env.UMAMI_API_KEY,
  base_url: "https://api.umami.is/v1/websites",
  endpoint: {
    page_views: "/pageviews",
    sessions: "/sessions/stats",
  },
  parameters: {
    startAt: 1717174800000, // 1 Juni 2024 00:00 WIB
    endAt: 1767190799000, // 31 Desember 2025 23:59 WIB
    unit: "day", // changed from "month" to get better charts
    timezone: "Asia/Jakarta",
  },
  is_active: true,
  websites: [
    {
      domain: "muhanifs.my.id",
      website_id: process.env.UMAMI_WEBSITE_ID_MYID,
      umami_url:
        "https://cloud.umami.is/share/YBbXz2wWG0lCgSLt/www.muhanifs.my.id",
    },
    // {
    //   domain: "https://portofolio-git-dev-muhanifs-projects.vercel.app/",

    // }
  ],
};
