import { Repo, fetchRepos } from "@/services/fetchRepos/fetchRepos.service";
import { useEffect, useState } from "react";

export const useRepoList = (userName: string | undefined) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!userName) return;

    const fetchReposData = async () => {
      setIsLoading(true);
      try {
        const repos = await fetchRepos(userName);

        const sortedRepos = repos.sort(
          (a, b) => b.stargazers_count - a.stargazers_count,
        );
        setRepos(sortedRepos);
      } catch {
        setError("Erro ao buscar repositórios. Tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReposData();
  }, [userName]);
  
  const handleSortRepos = () => {
    const sortedRepos = [...repos].reverse();
    setRepos(sortedRepos);
  }

  return { repos, error, isLoading, handleSortRepos };
};
