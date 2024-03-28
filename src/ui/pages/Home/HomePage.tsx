import * as S from "./HomePage.styles";
import { useState } from "react";
import { useUser } from "@/ui/pages/Home/hooks/useUser";
import { Input } from "@/ui/components/Input/Input";
import { useDebounce } from "@/utils/hooks/useDebounce/useDebounce";
import { CardUserWrapper } from "@/ui/components/CardUserWrapper/CardUserWrapper";

export const HomePage = () => {
  const [username, setUsername] = useState("");
  const userNameDebounced = useDebounce(username, 500);
  const { data, error, isLoading } = useUser(userNameDebounced);
  return (
    <S.HomeWrapper>
      <S.Container>
        <Input
          placeholder="Digite o nome do usuário do GitHub, ex: octocat"
          onChange={(e) => setUsername(e.target.value)}
          label="Usuário do GitHub"
        />
        <CardUserWrapper
          data={data}
          username={userNameDebounced}
          isLoading={isLoading}
          error={error}
        />
      </S.Container>
    </S.HomeWrapper>
  );
};