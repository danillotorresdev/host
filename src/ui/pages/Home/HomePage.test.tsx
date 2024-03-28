import { HomePage } from "./HomePage";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom"; 
import * as useUser from "./hooks/useUser";
import { render, screen } from "@/utils/settings/tests/utilities";
import { userMock } from "@/services/fetchUser/user.mocks";

describe("HomePage", () => {
  vi.spyOn(useUser, "useUser").mockReturnValue({
    data: userMock,
    isLoading: false,
    error: null,
  });

  it("should render the user data", async () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render the spinner loader", async () => {
    const useUserMock = vi.spyOn(useUser, "useUser");
    useUserMock.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("spinner-loader")).toBeDefined();
  });

  it("should render the error message", async () => {
    const useUserMock = vi.spyOn(useUser, "useUser");
    useUserMock.mockReturnValue({
      data: null,
      isLoading: false,
      error: "User not found",
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByText("User not found")).toBeDefined();
  });
});
