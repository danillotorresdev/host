import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 14px;
  padding: 0 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  appearance: none;
  border: 1px solid #000;
  width: 100%;

  &:hover {
    color: #000;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
