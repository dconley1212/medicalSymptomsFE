import Reviews from "../../features/Reviews/Reviews";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing the Review component", () => {
  test("the document title is on the page", () => {
    render(
      <Router>
        <Provider store={store}>
          <Reviews />
        </Provider>
      </Router>
    );

    const title = screen.getByText(
      "What are people saying about our products?"
    );
    expect(title).toBeInTheDocument();
  });
  test("first item card is in the document and has appropriate color, title", () => {
    render(
      <Router>
        <Provider store={store}>
          <Reviews />
        </Provider>
      </Router>
    );

    const itemOneCard = screen.getByTestId("itemOneCard");
    const itemOne = screen.getByText("Item One");
    expect(itemOneCard).toBeInTheDocument();
    expect(itemOneCard).toHaveStyle("background-color: #cb4a6f");
    expect(itemOne).toBeInTheDocument();
  });
  test("second item card is in the document, has the right background color, title", () => {
    render(
      <Router>
        <Provider store={store}>
          <Reviews />
        </Provider>
      </Router>
    );
    const itemTwoCard = screen.getByTestId("itemTwoCard");
    const itemTwo = screen.getByText("Item Two");

    expect(itemTwoCard).toBeInTheDocument();
    expect(itemTwoCard).toHaveStyle("background-color: #cb4a6f");
    expect(itemTwo).toBeInTheDocument();
  });
  test("both add review buttons for each item are on the page and have right style", () => {
    render(
      <Router>
        <Provider store={store}>
          <Reviews />
        </Provider>
      </Router>
    );

    const addReviewButtons = screen.getAllByRole("button", {
      name: "Add a Review",
    });

    addReviewButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).toHaveStyle("background-color: #4682b4");
    });
  });
});
