import { useParams } from "react-router-dom";
import * as S from "./RepoList.styles";
import { useRepoList } from "@/ui/pages/RepoList/hooks/useRepoList";
import { Icon } from "@/ui/components/Icon/Icon";
import { NotificationDisclaimer } from "@/ui/components/NotificationDisclaimer/NotificationDisclaimer";
import { SkeletonRepoListLoader } from "@/ui/pages/RepoList/SkeletonRepoListLoader/SkeletonRepoListLoader";

export const RepoListPage = () => {
  const { username } = useParams<{ username: string }>();

  const { repos, error, isLoading, handleSortRepos } = useRepoList(username);

  if (error) {
    return <NotificationDisclaimer message={error} type="error" />;
  }

  return (
    <S.PageContainer>
      <S.PageHeader>
        <S.Title>Repositorios de {username}</S.Title>
        <div>
          <S.SortButton onClick={handleSortRepos}>
            <Icon name="sort" size="sm" />
            Ordenar
          </S.SortButton>
        </div>
      </S.PageHeader>
      {isLoading ? (
        <SkeletonRepoListLoader />
      ) : (
        <S.RepoListWrapper>
          <S.RepoList>
            {repos.map((repo) => (
              <S.RepoLink
                to={`/repository-details/${repo.full_name}`}
                key={repo.id}
              >
                <S.RepoCard key={repo.id}>
                  <S.Description>
                    <Icon name="repo" size="sm" /> {repo.name}
                  </S.Description>
                  <S.Description>
                    <Icon name="star" size="sm" /> {repo.stargazers_count}
                  </S.Description>
                </S.RepoCard>
              </S.RepoLink>
            ))}
          </S.RepoList>
        </S.RepoListWrapper>
      )}
    </S.PageContainer>
  );
};
