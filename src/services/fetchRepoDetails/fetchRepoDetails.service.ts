import { githubBaseAPI } from "@/services/githubBaseAPI";

export type RepoDetail = {
  id: number;
  name: string;
  stargazers_count: number;
  full_name: string;
  description: string;
  language: string;
  html_url: string;
};

export const fetchRepoDetails = async (
  repositoryName: string,
): Promise<RepoDetail> => {
  return await githubBaseAPI(`repos/${repositoryName}`);
};
