import { githubBaseAPI } from "@/services/githubBaseAPI";

export type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  type: string;
  name: string;
  blog: string;
  location: string;
  email: string | null;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
};

export const fetchUser = async (username: string): Promise<User> =>
  await githubBaseAPI(`users/${username}`);
