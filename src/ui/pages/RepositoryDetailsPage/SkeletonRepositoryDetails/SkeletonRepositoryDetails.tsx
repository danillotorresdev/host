import { SkeletonLoader } from "@/ui/components/Loaders/SkeletonLoader";
import * as S from "@/ui/pages/RepoList/SkeletonRepoListLoader/SkeletonRepoListLoader.styles";

export const SkeletonRepositoryDetailsLoader = () => (
  <S.SkeletonLoaderWrapper data-testid="skeleton-repository-details-loader">
    <SkeletonLoader height="40px" width="100%" />
    <SkeletonLoader height="20px" width="100%" />
    <SkeletonLoader height="20px" width="100%" />
    <SkeletonLoader height="20px" width="100%" />
    <SkeletonLoader height="20px" width="100%" />
  </S.SkeletonLoaderWrapper>
);
