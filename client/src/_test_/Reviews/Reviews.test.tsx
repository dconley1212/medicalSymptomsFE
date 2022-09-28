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
});
