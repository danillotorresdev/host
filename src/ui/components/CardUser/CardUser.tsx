import { Icon } from "@/ui/components/Icon/Icon";
import * as S from "./CardUser.styles";
import { LazyBackgroundImg } from "@/ui/components/LazyBackgroundImage/LazyBackgroundImage";
import { LinkButton } from "@/ui/components/LinkButton/LinkButton";

export type CardUserProps = {
  name: string;
  followers: number;
  following: number;
  email: string | null;
  bio: string;
  avatar_url: string;
  username: string;
};

export const CardUser = ({
  name,
  followers,
  following,
  email,
  bio,
  avatar_url,
  username,
}: CardUserProps) => (
  <S.Container>
    <S.ProfileWrapper>
      <S.ProfileImageWrapper>
        <LazyBackgroundImg img={avatar_url} />
      </S.ProfileImageWrapper>
    </S.ProfileWrapper>
    <S.TextBox>
      <S.Name>{name}</S.Name>
      <S.ParagraphWrapper>
        <Icon name="followers" color="#5b5b5b" size="md" />
        <p>Seguidores: {followers}</p>
      </S.ParagraphWrapper>
      <S.ParagraphWrapper>
        <Icon name="followers" color="#5b5b5b" size="md" />
        <p>Seguindo: {following}</p>
      </S.ParagraphWrapper>
      <S.ParagraphWrapper>
        <Icon name="email" color="#5b5b5b" size="md" />
        {email ? <p>{email}</p> : <p>Email não disponível</p>}
      </S.ParagraphWrapper>
      <S.ParagraphWrapper>
        <p>{bio}</p>
      </S.ParagraphWrapper>
      <div
        style={{
          width: "200px",
          marginTop: "1rem",
        }}
      >
        <LinkButton
          to={`/user/${username}/repos`}
          style={{
            marginBottom: "1rem",
          }}
        >
          <Icon name="arrow-foward" color="#b1aeae" /> Repositórios
        </LinkButton>
      </div>
    </S.TextBox>
  </S.Container>
);
