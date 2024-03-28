import { useParams } from "react-router-dom";
import { useRepoDetails } from "@/ui/pages/RepositoryDetailsPage/hooks/useRepoDetails";
import { NotificationDisclaimer } from "@/ui/components/NotificationDisclaimer/NotificationDisclaimer";
import * as S from "@/ui/pages/RepositoryDetailsPage/RepositoryDetailsPage.styles";
import { Icon } from "@/ui/components/Icon/Icon";
import { SkeletonRepositoryDetailsLoader } from "@/ui/pages/RepositoryDetailsPage/SkeletonRepositoryDetails/SkeletonRepositoryDetails";

type RouteParams = {
  username: string;
  repositoryName: string;
};

export const RepositoryDetailsPage = () => {
  const { username, repositoryName } = useParams<RouteParams>();

  const { repositoryData, error, isLoading } = useRepoDetails({
    repositoryName,
    username,
  });

  if (error) {
    return <NotificationDisclaimer message={error} type="error" />;
  }

  return (
    <S.DetailsContainer>
      {isLoading ? (
        <SkeletonRepositoryDetailsLoader />
      ) : (
        <>
          {!repositoryData ? (
            <NotificationDisclaimer
              message="Repositorio não encontrado ou não existe."
              type="info"
            />
          ) : (
            <>
              <S.Title>
                <Icon name="repo" /> {repositoryData.name}
              </S.Title>
              <S.Description>
                Descrição: {repositoryData.description || "Sem descrição"}
              </S.Description>
              <S.Stars>
                <Icon name="star" />
                {repositoryData.stargazers_count}
              </S.Stars>
              <S.Language>Linguagem: {repositoryData.language}</S.Language>
              <S.GitHubLink
                href={repositoryData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="arrow-foward" size="sm" /> Ver no GitHub
              </S.GitHubLink>
            </>
          )}
        </>
      )}
    </S.DetailsContainer>
  );
};
