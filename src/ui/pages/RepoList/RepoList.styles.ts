import { styled } from "@linaria/react";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const RepoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const RepoList = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const RepoCard = styled.li`
  list-style-type: none;
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 50px;
`;

export const RepoLink = styled(Link)`
  font-size: 16px;
  color: #0366d6;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0550a4;
  }
`;

export const Description = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #5b5b5b;
  margin: 0;
  gap: 10px;

  &:first-child {
    margin-bottom: 5px;
  }
`;
