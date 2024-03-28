import { SpinnerLoader } from "./SpinnerLoader";
import { render } from "@/utils/settings/tests/utilities";
import { BrowserRouter } from "react-router-dom";
import { expect, it, describe } from "vitest";


describe("SpinnerLoader", () => {
  it("should render the user's name", () => {
    const { asFragment } = render(
      <SpinnerLoader />,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});