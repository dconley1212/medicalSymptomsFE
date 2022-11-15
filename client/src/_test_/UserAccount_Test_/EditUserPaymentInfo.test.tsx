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
    const nameOnCard = screen.getByPlaceholderText("Name on Insurance Card");
    const insuranceCompany = screen.getByPlaceholderText("Insurance Company");
    const addInsuranceFile = screen.getByPlaceholderText("Add insurance file");
    const updateInsurance = screen.getByRole("button", {
      name: "Update Insurance Information",
    });

    expect(nameOnCard).toBeInTheDocument();
    expect(insuranceCompany).toBeInTheDocument();
    expect(addInsuranceFile).toBeInTheDocument();
    expect(updateInsurance).toBeInTheDocument();
  });
});
