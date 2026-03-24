export interface GithubUser {
  login: string;
  name: string;
  bio: string;
  repositories: {
    totalCount: number;
    edges: Array<{
      node: {
        id: string;
        name: string;
        description: string | null;
        url: string;
        stargazerCount: number;
        forkCount: number;
        primaryLanguage: {
          name: string;
          color: string;
        } | null;
      };
    }>;
  };
  contributionsCollection: {
    contributionCalendar: {
      colors: string[];
      totalContributions: number;
      months: Array<{
        firstDay: number;
        name: string;
        totalWeeks: number;
      }>;
      weeks: Array<{
        contributionDays: Array<{
          color: string;
          contributionCount: number;
          date: string;
        }>;
        firstDay: number;
      }>;
    };
  };
}
