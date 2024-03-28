import { User } from "@/services/fetchUser/fetchUser.service";
import { SpinnerLoader } from "@/ui/components/Loaders/SpinnerLoader";
import { NotificationDisclaimer } from "@/ui/components/NotificationDisclaimer/NotificationDisclaimer";
import * as S from "./CardUserWrapper.styles";
import { CardUser } from "@/ui/components/CardUser/CardUser";

type CardUserWrapperProps = {
  username: string;
  isLoading: boolean;
  data: User | null | undefined;
  error: string | null;
};

export const CardUserWrapper = ({
  username,
  data,
  error,
  isLoading,
}: CardUserWrapperProps) => {
  if (error) {
    return <NotificationDisclaimer message={error} type="error" />;
  }

  if (isLoading) {
    return (
      <S.SpinnerLoaderWrapper>
        <SpinnerLoader size={50} />;
      </S.SpinnerLoaderWrapper>
    );
  }

  if (data === null) {
    return null;
  }

  return (
    <>
      {!data ? (
        <NotificationDisclaimer
          message={error ?? "Usuário não encontrado"}
          type="error"
        />
      ) : (
        <CardUser
          username={username}
          name={data?.name}
          followers={data?.followers}
          following={data?.following}
          email={data?.email}
          bio={data?.bio}
          avatar_url={data?.avatar_url}
        />
      )}
    </>
  );
};
