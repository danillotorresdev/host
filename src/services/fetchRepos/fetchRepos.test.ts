import { describe, expect, it, vi } from "vitest";
import { fetchRepos } from "./fetchRepos.service";
import { githubBaseAPI } from "@/services/githubBaseAPI";

vi.mock("@/services/githubBaseAPI");

describe("fetchRepos", () => {
  it("should fetch repositories correctly", async () => {
    await fetchRepos("johndoe");

    expect(githubBaseAPI).toHaveBeenCalledWith("users/johndoe/repos");
  });
});