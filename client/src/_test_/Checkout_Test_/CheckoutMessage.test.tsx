import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import CheckoutMessage from "../../features/Checkout/CheckoutMessage";

import "@testing-library/jest-dom";

describe("CheckoutMessage component", () => {
  it("component renders", () => {
    render(
      <Router>
        <Provider store={store}>
          <CheckoutMessage />
        </Provider>
      </Router>
    );
  });
  it("shows the thank you message", () => {
    render(
      <Router>
        <Provider store={store}>
          <CheckoutMessage />
        </Provider>
      </Router>
    );

    const ThankYouTitle = screen.getByText("Thank you for your purchase!");
    expect(ThankYouTitle).toBeInTheDocument();
  });
});
