import { render, screen } from "@/utils/settings/tests/utilities";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { RepoListPage } from "./RepoList";
import { describe, expect, it } from "vitest";

describe("RepoListPage", () => {
  it('should render the list of repositories', () => {
    render(
      <MemoryRouter initialEntries={['/user/jhondoe/repos']}>
        <Routes>
          <Route path="/user/:username/repos" element={<RepoListPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Repositorios de jhondoe')).toBeDefined();
  });
});