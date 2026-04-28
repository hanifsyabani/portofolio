"use client";

import { useQuery } from "@tanstack/react-query";
import { GetStatsGithub } from "@/service/github";
import Loader from "../ui/loader";
import { GithubUser } from "@/@types/github";
import SectionHeading from "../ui/section-heading";
import SectionSubHeading from "../ui/section-sub-heading";
import { SiGithub } from "react-icons/si";
import Breakline from "../ui/breakline";
import ContributionCalendar from "./contribution-calendar";
import GithubStatsCard from "./github-stats-card";
import { useTranslations } from "next-intl";

export default function GithubStats() {
  const t = useTranslations("StatisticsPage");

  const { data, isLoading } = useQuery({
    queryFn: () => GetStatsGithub(),
    queryKey: ["github-stats"],
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  })

  const stats = data as GithubUser

  const topRepos = stats?.repositories.edges.slice(0, 5);
  const totalStars = stats?.repositories.edges.reduce(
    (sum, repo) => sum + repo.node.stargazerCount,
    0,
  );

  if (isLoading) return <Loader />

  return (
    <section >
      <SectionHeading title={t("github.title")} icon={<SiGithub />} className="mb-2" />
      <SectionSubHeading>
        {t("github.sub_title")}
      </SectionSubHeading>
      <div className="my-10">
        <Breakline />
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          <GithubStatsCard title={t("github.total_contributions")} data={data?.contributionsCollection.contributionCalendar.totalContributions} />
          <GithubStatsCard title={t("github.repositories")} data={data?.repositories?.totalCount} />
          <GithubStatsCard title={t("github.total_stars")} data={totalStars} />

        </div>

        <div>
          <ContributionCalendar
            weeks={stats?.contributionsCollection.contributionCalendar.weeks}
            months={stats?.contributionsCollection.contributionCalendar.months}
            colors={stats?.contributionsCollection.contributionCalendar.colors}
          />
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold">{t("github.top_repositories")}</h2>
          <div className="space-y-3 grid lg:grid-cols-2 gap-4">
            {topRepos.map((repo) => (
              <a
                key={repo.node.id}
                href={repo.node.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {repo.node.name}
                    </h3>
                    {repo.node.description && (
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {repo.node.description}
                      </p>
                    )}
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      {repo.node.primaryLanguage && (
                        <span className="flex items-center gap-1">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor: repo.node.primaryLanguage.color,
                            }}
                          />
                          {repo.node.primaryLanguage.name}
                        </span>
                      )}
                      {repo.node.stargazerCount > 0 && (
                        <span>⭐ {repo.node.stargazerCount}</span>
                      )}
                      {repo.node.forkCount > 0 && (
                        <span>🔀 {repo.node.forkCount}</span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
