import { LinkProps } from "react-router-dom";
import * as S from "./LinkButton.styles";

export const LinkButton = ({ children, to, ...props }: Readonly<LinkProps>) => (
  <S.LinkButton to={to} {...props}>
    {children}
  </S.LinkButton>
);
