
import { LazyBackgroundImg } from './LazyBackgroundImage';
import { render } from "@/utils/settings/tests/utilities";
import { expect, it, describe } from "vitest";

describe("LazyBackgroundImg", () => {
  it("should render the user's name", () => {
    const { asFragment } = render(
      <LazyBackgroundImg
        img="https://avatars.githubusercontent.com/u/1?v=4"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  }
  )
});
