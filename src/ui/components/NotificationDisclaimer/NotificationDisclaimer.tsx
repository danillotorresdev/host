import * as S from "@/ui/components/NotificationDisclaimer/NotificationDisclaimer.styles";

type NotificationDisclaimerProps = {
  message: string;
  type: "error" | "info";
};

const notificationColorsMap = {
  error: {
    backgroundColor: "#ffd6d6",
    color: "#cc0000",
  },
  info: {
    backgroundColor: "#f0f0f0",
    color: "#333333",
  },
};

export const NotificationDisclaimer = ({
  message,
  type,
}: NotificationDisclaimerProps) => (
  <S.NotificationWrapper style={notificationColorsMap[type]}>
    <p>{message}</p>
  </S.NotificationWrapper>
);
