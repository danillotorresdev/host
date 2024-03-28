import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { useRepoList } from "./useRepoList";
import * as fetchRepos from "@/services/fetchRepos/fetchRepos.service";
import { reposMock } from "@/services/fetchRepos/repos.mock";

describe("useRepoList", () => {
  beforeEach(() => {
    vi.spyOn(fetchRepos, "fetchRepos").mockResolvedValue(reposMock);
  });

  it("should return isLoading as true when username is provided", async () => {
    const { result } = renderHook(() => useRepoList("johndoe"));
    expect(result.current.isLoading).toBe(true);
  });

  it("should return data when username is provided", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRepoList("johndoe"));
    await waitForNextUpdate();
    expect(result.current.repos).toEqual(reposMock);
  });

  it("should return error when username is not found", async () => {
    vi.spyOn(fetchRepos, "fetchRepos").mockRejectedValue("User not found");
    const { result, waitForNextUpdate } = renderHook(() => useRepoList("johndoe"));
    await waitForNextUpdate();
    expect(result.current.error).toBe("Erro ao buscar repositórios. Tente novamente mais tarde.");
  });

  it("should sort repos when handleSortRepos is called", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRepoList("johndoe"));
    await waitForNextUpdate();
    result.current.handleSortRepos();
    expect(result.current.repos).toEqual(reposMock.reverse());
  });
});
