import { render, screen } from "@/utils/settings/tests/utilities";
import { NotificationDisclaimer } from "./NotificationDisclaimer";
import { expect, it, describe } from "vitest";

describe("NotificationDisclaimer", () => {
  it("should render the message", () => {
    const { asFragment } = render(
      <NotificationDisclaimer message="Error message" type="error" />,
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("Error message")).toBeDefined();
  });

  it("should render the message with the correct type", () => {
    render(<NotificationDisclaimer message="Error message" type="error" />);
    expect(screen.getByText("Error message")).toBeDefined();
  });

  it("should render the message with the correct type", () => {
    render(<NotificationDisclaimer message="Success message" type="info" />);
    expect(screen.getByText("Success message")).toBeDefined();
  });
});
