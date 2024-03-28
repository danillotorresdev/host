import { styled } from "@linaria/react";

type SkeletonLoaderProps = {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  backgroundColor?: string;
  className?: string;
};

const SkeletonLoaderElement = styled.div<SkeletonLoaderProps>`
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "20px"};
  background-color: ${(props) => props.backgroundColor ?? "#f0f0f0"};
  border-radius: ${(props) => props.borderRadius ?? "4px"};
  margin-bottom: 10px;
`;

export const SkeletonLoader = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  className,
}: SkeletonLoaderProps) => (
  <SkeletonLoaderElement
    className={className}
    width={width}
    height={height}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
  />
);
