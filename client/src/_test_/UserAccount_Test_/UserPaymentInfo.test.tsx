import UserPaymentInfo from "../../features/UserAccount/UserPaymentInfo";
import { render, screen } from "@testing-library/react";
import handleSubmitPayment from "../../features/UserAccount/UserInfo";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import "@testing-library/jest-dom";

describe("testing the UserPaymentInfo component", () => {
  test("every input is in the document and the add payment button", () => {
    render(
      <Provider store={store}>
        <UserPaymentInfo handleSubmitPayment={handleSubmitPayment} />
      </Provider>
    );
    const cardNumber = screen.getByTestId("cardNumber");
    const nameOnCard = screen.getByTestId("nameOnCard");
    const expirationDate = screen.getByTestId("cardExpiration");
    const securityCode = screen.getByTestId("securityCode");
    const addPaymentButton = screen.getByRole("button", {
      name: "Add Payment",
    });

    expect(cardNumber).toBeInTheDocument();
    expect(nameOnCard).toBeInTheDocument();
    expect(expirationDate).toBeInTheDocument();
    expect(securityCode).toBeInTheDocument();
    expect(addPaymentButton).toBeInTheDocument();
  });
});
