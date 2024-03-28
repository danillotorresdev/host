import { styled } from "@linaria/react";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const SpinnerWrapper = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${(props) => props.size ?? 50}px;
  height: ${(props) => props.size ?? 50}px;
  border: 3px solid ${(props) => props.color ?? "#ccc"};
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerLoader = ({ size, color }: SpinnerProps) => <SpinnerWrapper size={size} color={color} data-testid="spinner-loader" />;
