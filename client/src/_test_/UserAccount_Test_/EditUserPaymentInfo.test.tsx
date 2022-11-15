import EditUserInsuranceInfo from "../../features/UserAccount/EditUserInsuranceInfo";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing the EditUserPaymentInfo component", () => {
  test("make sure every element is rendering that is supposed to be on the screen", () => {
    render(
      <Router>
        <Provider store={store}>
          <EditUserInsuranceInfo />
        </Provider>
      </Router>
    );
    const cardNumber = screen.getByPlaceholderText("Card Number");
    const nameOnCard = screen.getByPlaceholderText("Name on Card");
    const expirationDate = screen.getByPlaceholderText("Expiration date");
    const securityCode = screen.getByPlaceholderText("Security Code");
    const addPayment = screen.getByRole("button", { name: "Add Payment" });

    expect(cardNumber).toBeInTheDocument();
    expect(nameOnCard).toBeInTheDocument();
    expect(expirationDate).toBeInTheDocument();
    expect(securityCode).toBeInTheDocument();
    expect(addPayment).toBeInTheDocument();
  });
});
