import { describe, expect, it, vi } from "vitest";
import { fetchRepoDetails } from "./fetchRepoDetails.service";
import { githubBaseAPI } from "@/services/githubBaseAPI";

vi.mock("@/services/githubBaseAPI");

describe("fetchRepoDetails", () => {
  it("should fetch repository details correctly", async () => {
    await fetchRepoDetails("johndoe/my-repo");

    expect(githubBaseAPI).toHaveBeenCalledWith("repos/johndoe/my-repo");
  });
});
