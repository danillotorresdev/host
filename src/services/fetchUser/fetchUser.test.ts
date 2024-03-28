import { describe, expect, it, vi } from "vitest";
import { fetchUser } from "./fetchUser.service";
import { githubBaseAPI } from "@/services/githubBaseAPI";

vi.mock("@/services/githubBaseAPI");

describe("fetchUser", () => {
  it("should fetch user details correctly", async () => {
    await fetchUser("johndoe");

    expect(githubBaseAPI).toHaveBeenCalledWith("users/johndoe");
  });
});
