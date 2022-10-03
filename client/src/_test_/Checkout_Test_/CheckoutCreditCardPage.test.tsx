import CheckoutCreditCardPage from "../../features/Checkout/CheckoutCreditCardPage";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("testing the CheckoutCreditCardPage", () => {
  test("making sure the whole form and submit button show up on the page", () => {
    render(
      <Router>
        <Provider store={store}>
          <CheckoutCreditCardPage />
        </Provider>
      </Router>
    );
    const cardNumber = screen.getByPlaceholderText("Card Number");
    const nameOnCard = screen.getByPlaceholderText("Name on card");
    const expirationDate = screen.getByPlaceholderText(
      "Expiration data (mm/yy)"
    );
    const securityCode = screen.getByPlaceholderText("Security Code");
    const shippingAddress = screen.getByLabelText("Same as Shipping address");
    const differentBillingAddress = screen.getByLabelText(
      "Used a different billing address"
    );
    const submitOrderButton = screen.getByRole("button");

    expect(cardNumber).toBeInTheDocument();
    expect(nameOnCard).toBeInTheDocument();
    expect(expirationDate).toBeInTheDocument();
    expect(securityCode).toBeInTheDocument();
    expect(shippingAddress).toBeInTheDocument();
    expect(differentBillingAddress).toBeInTheDocument();
    expect(submitOrderButton).toBeInTheDocument();
  });
});
