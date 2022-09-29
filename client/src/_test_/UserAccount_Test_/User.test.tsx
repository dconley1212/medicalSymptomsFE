import User from "../../features/UserAccount/User";
import { render, screen } from "@testing-library/react";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe("testing the User component", () => {
  test("menu bar shows the appropriate tabs on the User home page if userInfo isn't filled", () => {
    render(
      <Provider store={store}>
        <User />
      </Provider>
    );

    const addInfoButton = screen.getByRole("button", {
      name: "Add info for a faster checkout!",
    });
    const newsButton = screen.getByRole("button", { name: "News" });
    const menuBar = screen.getByTestId("menu-bar");

    expect(menuBar).toBeInTheDocument();
    expect(menuBar).toHaveStyle("background-color: #4682b4");
    expect(addInfoButton).toBeInTheDocument();
    expect(addInfoButton).toHaveStyle("background-color: #cb4a6f");
    expect(newsButton).toBeInTheDocument();
    expect(newsButton).toHaveStyle("background-color: #cb4a6f");
  });
});
