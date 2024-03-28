import { githubBaseAPI } from "@/services/githubBaseAPI";

export type Repo = {
  id: number;
  name: string;
  stargazers_count: number;
  full_name: string;
  html_url: string;
};

export const fetchRepos = async (username: string): Promise<Repo[]> =>
  await githubBaseAPI(`users/${username}/repos`);
