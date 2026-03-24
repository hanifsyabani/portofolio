import GithubStats from "@/components/statistics/github-stats";
import Container from "@/components/ui/container-custom";

export const metadata = {
  title: "Statistics",
  description: "My statistics and contributions",
};

export default function Page() {
  return (
   <Container>
       <GithubStats />
   </Container>
    
  );
}