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
});
