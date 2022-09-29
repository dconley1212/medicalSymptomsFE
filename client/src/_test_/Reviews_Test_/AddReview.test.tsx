import AddReview from "../../features/Reviews/AddRevew";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("tests for the AddReviews page", () => {
  test("title is showing in the document", () => {
    render(
      <Router>
        <Provider store={store}>
          <AddReview />
        </Provider>
      </Router>
    );

    const title = screen.getByText("Let us know what you think!");
    expect(title).toBeInTheDocument();
  });
  test("comments text area, radio button selections, name text area, and submit button is on the page", () => {
    render(
      <Router>
        <Provider store={store}>
          <AddReview />
        </Provider>
      </Router>
    );
    const comments = screen.getByTestId("comments");
    const itemOneButton = screen.getByLabelText("Item One");
    const itemTwoButton = screen.getByLabelText("Item Two");
    const name = screen.getByTestId("name");
    const submitButton = screen.getByRole("button", { name: "Submit Review" });

    expect(comments).toBeInTheDocument();
    expect(itemOneButton).toBeInTheDocument();
    expect(itemTwoButton).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveStyle("background-color: #cb4a6f");
  });
});
