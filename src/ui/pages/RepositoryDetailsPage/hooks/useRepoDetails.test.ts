import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { useRepoDetails } from "./useRepoDetails";
import * as fetchRepoDetails from "@/services/fetchRepoDetails/fetchRepoDetails.service";
import { repoDetailMock } from "@/services/fetchRepoDetails/repoDetail.mock";

describe("useRepoList", () => {
  beforeEach(() => {
    vi.spyOn(fetchRepoDetails, "fetchRepoDetails").mockResolvedValue(repoDetailMock);
  });

  it("should return isLoading as true when username is provided", async () => {
    const { result } = renderHook(() =>
      useRepoDetails({ username: "johndoe", repositoryName: "repo1" }),
    );
    expect(result.current.isLoading).toBe(true);
  });

  it("should return data when username is provided", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useRepoDetails({ username: "johndoe", repositoryName: "repo1" }),
    );
    await waitForNextUpdate();
    expect(result.current.repositoryData).toEqual(repoDetailMock);
  });

  it("should return error when username is not found", async () => {
    vi.spyOn(fetchRepoDetails, "fetchRepoDetails").mockRejectedValue("User not found");
    const { result, waitForNextUpdate } = renderHook(() =>
      useRepoDetails({ username: "johndoe", repositoryName: "repo1" }),
    );
    await waitForNextUpdate();
    expect(result.current.error).toBe(
      "Erro ao buscar dados do repositório. Tente novamente mais tarde",
    );
  });
});
