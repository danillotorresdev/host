import { styled } from "@linaria/react";

export const Container = styled.div`
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  overflow: hidden;
  position: relative;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const Name = styled.h2`
  color: #5b5b5b;
  font-size: 1rem;
  font-size: 1.5rem;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #5b5b5b;
  & > p {
    margin-left: 0.5rem;
  }
`;

export const TextBox = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const ProfileImageWrapper = styled.div`
  height: 400px;
  width: 100%;
`;
