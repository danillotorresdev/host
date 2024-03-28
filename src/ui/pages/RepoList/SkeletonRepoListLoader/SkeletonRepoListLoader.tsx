import { SkeletonLoader } from "@/ui/components/Loaders/SkeletonLoader";
import * as S from "@/ui/pages/RepoList/SkeletonRepoListLoader/SkeletonRepoListLoader.styles";

export const SkeletonRepoListLoader = () => (
  <S.SkeletonLoaderWrapper>
    {Array.from({ length: 18 }).map((_, index) => (
      <SkeletonLoader key={index} height="90px" className="skeleton-loader" />
    ))}
  </S.SkeletonLoaderWrapper>
);
