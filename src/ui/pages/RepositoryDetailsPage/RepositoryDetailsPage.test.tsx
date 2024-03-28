import { render, screen } from "@/utils/settings/tests/utilities";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { RepositoryDetailsPage } from "./RepositoryDetailsPage";
import { beforeEach, describe, expect, it, vi } from "vitest";
import * as useRepoDetails from "./hooks/useRepoDetails";
import { repoDetailMock } from "@/services/fetchRepoDetails/repoDetail.mock";

describe("RepositoryDetailsPage", () => {
  beforeEach(() => {
    const useRepoDetailsMock = vi.spyOn(useRepoDetails, "useRepoDetails");
    useRepoDetailsMock.mockReturnValue({
      repositoryData: repoDetailMock,
      isLoading: false,
      error: null,
    });
  });

  it("should render the list of repositories", async () => {
    render(
      <MemoryRouter initialEntries={["/repository-details/jhondoe/my-repo"]}>
        <Routes>
          <Route
            path="/repository-details/:username/:repositoryName/*"
            element={<RepositoryDetailsPage />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText("My Repo")).toBeDefined();
  });

  it("should render the skeleton loader", async () => {
    const useRepoDetailsMock = vi.spyOn(useRepoDetails, "useRepoDetails");
    useRepoDetailsMock.mockReturnValue({
      repositoryData: null,
      isLoading: true,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/repository-details/jhondoe/my-repo"]}>
        <Routes>
          <Route
            path="/repository-details/:username/:repositoryName/*"
            element={<RepositoryDetailsPage />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByTestId("skeleton-repository-details-loader")).toBeDefined();
  });

  it("should render the error message", async () => {
    const useRepoDetailsMock = vi.spyOn(useRepoDetails, "useRepoDetails");
    useRepoDetailsMock.mockReturnValue({
      repositoryData: null,
      isLoading: false,
      error: "Error message",
    });

    render(
      <MemoryRouter initialEntries={["/repository-details/jhondoe/my-repo"]}>
        <Routes>
          <Route
            path="/repository-details/:username/:repositoryName/*"
            element={<RepositoryDetailsPage />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText("Error message")).toBeDefined();
  });

  it("should render the not found message", async () => {
    const useRepoDetailsMock = vi.spyOn(useRepoDetails, "useRepoDetails");
    useRepoDetailsMock.mockReturnValue({
      repositoryData: null,
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/repository-details/jhondoe/my-repo"]}>
        <Routes>
          <Route
            path="/repository-details/:username/:repositoryName/*"
            element={<RepositoryDetailsPage />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText("Repositorio não encontrado ou não existe.")).toBeDefined();
  });
});
