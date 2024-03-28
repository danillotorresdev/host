import { SkeletonLoader } from "./SkeletonLoader";
import { render } from "@/utils/settings/tests/utilities";
import { BrowserRouter } from "react-router-dom";
import { expect, it, describe } from "vitest";

describe("SkeletonLoader", () => {
  it("should render the user's name", () => {
    const { asFragment } = render(
      <SkeletonLoader />,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });
});