import CheckoutInfoPage from "../../features/Checkout/CheckoutInfoPage";
import CheckoutCreditCardPage from "../../features/Checkout/CheckoutCreditCardPage";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing the CheckoutInfoPage component", () => {
  test("all of the elements are showing up on the page", () => {
    render(
      <Router>
        <Provider store={store}>
          <CheckoutInfoPage />
        </Provider>
      </Router>
    );
    const firstName = screen.getByPlaceholderText("First name");
    const lastName = screen.getByPlaceholderText("Last name");
    const email = screen.getByPlaceholderText("Email");
    const address = screen.getByPlaceholderText("Address");
    const aptSuite = screen.getByPlaceholderText(
      "Apartment, suite, etc. (optional)"
    );
    const city = screen.getByPlaceholderText("City");
    const stateDropdown = screen.getByTestId("dropdown");
    const zipcode = screen.getByPlaceholderText("ZIP code");
    const phone = screen.getByPlaceholderText("Phone");
    const checkbox = screen.getByRole("checkbox");
    const continueButton = screen.getByRole("button");

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(aptSuite).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(stateDropdown).toBeInTheDocument();
    expect(zipcode).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });
  test("continue to payment button pushes the user to the payment page", () => {
    render(
      <Router>
        <Provider store={store}>
          <CheckoutInfoPage />
        </Provider>
      </Router>
    );
    const continueButton = screen.getByRole("button", {
      name: "Continue to Payment",
    });
    fireEvent.click(continueButton);
    render(
      <Router>
        <Provider store={store}>
          <CheckoutCreditCardPage />
        </Provider>
      </Router>
    );
  });
});
