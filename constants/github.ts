export const GITHUB_ACCOUNTS = {
  username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "",
  token: process.env.GITHUB_READ_USER_TOKEN,
  endpoint: "/api/github",
  type: "personal",
  github_url: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
  is_active: true,
};
