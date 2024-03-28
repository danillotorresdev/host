import { Repo } from "@/services/fetchRepos/fetchRepos.service";

export const reposMock: Repo[] = [
  {
    id: 1,
    name: "repo1",
    stargazers_count: 10,
    full_name: "user/repo1",
    html_url: "https://",
  },
  {
    id: 2,
    name: "repo2",
    stargazers_count: 20,
    full_name: "user/repo2",
    html_url: "https://",
  },
  {
    id: 3,
    name: "repo3",
    stargazers_count: 30,
    full_name: "user/repo3",
    html_url: "https://",
  },
]