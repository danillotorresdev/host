import { LinkButton } from "./LinkButton";
import { render } from "@/utils/settings/tests/utilities";
import { BrowserRouter } from "react-router-dom";
import { expect, it, describe } from "vitest";

describe("LinkButton", () => {
  it("should render the user's name", () => {
    const { asFragment } = render(
      <LinkButton to="/user/jhondoe/repos">
        Repositórios
      </LinkButton>,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
