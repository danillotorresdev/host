import {
  RepoDetail,
  fetchRepoDetails,
} from "@/services/fetchRepoDetails/fetchRepoDetails.service";
import { useEffect, useState } from "react";

type UseRepoDetailsProps = {
  username?: string;
  repositoryName?: string;
};

export const useRepoDetails = ({
  repositoryName,
  username,
}: UseRepoDetailsProps) => {
  const [repositoryData, setRepositoryData] = useState<RepoDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!repositoryName || !username) {
      setError("Repositório não encontrado");
      return;
    }

    const fetchRepoData = async () => {
      try {
        setIsLoading(true);
        const repoData = await fetchRepoDetails(
          `${username}/${repositoryName}`,
        );
        setRepositoryData(repoData);
      } catch (error) {
        setError(
          "Erro ao buscar dados do repositório. Tente novamente mais tarde",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepoData();
  }, [repositoryName]);

  return {
    repositoryData,
    isLoading,
    error,
  };
};
