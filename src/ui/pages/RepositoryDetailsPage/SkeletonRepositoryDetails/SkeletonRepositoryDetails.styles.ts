import { styled } from "@linaria/react";

export const SkeletonLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;

  .skeleton-loader {
    width: 100%;
  }

  @media (min-width: 768px) {
    .skeleton-loader {
      width: calc(50% - 20px);
    }
  }

  @media (min-width: 1024px) {
    .skeleton-loader {
      width: calc(33.33% - 20px);
    }
  }
`;
