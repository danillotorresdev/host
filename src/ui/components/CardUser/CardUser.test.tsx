
import { CardUser } from './CardUser';
import { render, screen } from "@/utils/settings/tests/utilities";
import { expect, it, describe } from "vitest";
import { BrowserRouter } from 'react-router-dom';

describe("CardUser", () => {
  it("should render the user's name", () => {
    const { asFragment } = render(
      <CardUser
        name="John Doe"
        followers={100}
        following={200}
        email="jhondoe@email.com"
        bio="Lorem ipsum dolor sit amet"
        avatar_url="https://avatars.githubusercontent.com/u/1?v=4"
        username="jhondoe"
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("John Doe")).toBeDefined();
  }
  )
});