import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { useUser } from "./useUser";
import * as fetchUser from "@/services/fetchUser/fetchUser.service";
import { userMock } from "@/services/fetchUser/user.mocks";

describe("useUser", () => {
  beforeEach(() => {
    vi.spyOn(fetchUser, "fetchUser").mockResolvedValue(userMock);
  });

  it("should return isLoading as true when username is provided", async () => {
    const { result } = renderHook(() => useUser("johndoe"));
    expect(result.current.isLoading).toBe(true);
  });

  it("should return data when username is provided", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUser("johndoe"));
    await waitForNextUpdate();
    expect(result.current.data).toEqual(userMock);
  });

  it("should return error when username is not found", async () => {
    vi.spyOn(fetchUser, "fetchUser").mockRejectedValue("User not found");
    const { result, waitForNextUpdate } = renderHook(() => useUser("johndoe"));
    await waitForNextUpdate();
    expect(result.current.error).toBe("Usuário não encontrado");
  });
});
