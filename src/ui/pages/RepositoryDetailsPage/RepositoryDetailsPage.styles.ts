import { styled } from "@linaria/react";


const alignCenter = `
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
export const DetailsContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  margin-bottom: 25px;
  ${alignCenter}
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Stars = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  ${alignCenter}
`;

export const Language = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const GitHubLink = styled.a`
  font-size: 16px;
  color: #0366d6;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-top: 10px;
  font-weight: bold;
  margin-top: 20px;
  ${alignCenter}

  &:hover {
    color: #0550a4;
  }
`;
