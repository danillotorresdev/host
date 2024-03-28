import { HomePage } from "@/ui/pages/Home/HomePage";
import { RepoListPage } from "@/ui/pages/RepoList/RepoList";
import { RepositoryDetailsPage } from "@/ui/pages/RepositoryDetailsPage/RepositoryDetailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const RootRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:username/repos" element={<RepoListPage />} />
      <Route
        path="/repository-details/:username/:repositoryName/*"
        element={<RepositoryDetailsPage />} />
    </Routes>
  </BrowserRouter>
);
