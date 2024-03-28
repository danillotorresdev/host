import { CardUserWrapper } from "./CardUserWrapper";
import { render, screen } from "@/utils/settings/tests/utilities";
import { expect, it, describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { userMock } from "@/services/fetchUser/user.mocks";

describe("CardUserWrapper", () => {
  it("should render the user's name", () => {
    const { asFragment } = render(
      <CardUserWrapper
        data={userMock}
        isLoading={false}
        error={null}
        username="jhondoe"
      />,
      {
        wrapper: BrowserRouter,
      },
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("John Doe")).toBeDefined();
  });
});
