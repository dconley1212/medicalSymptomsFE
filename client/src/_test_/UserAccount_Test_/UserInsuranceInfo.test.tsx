import UserInsuranceInfo from "../../features/UserAccount/UserInsuranceInfo";
import { render, screen } from "@testing-library/react";
import handleSubmitInsurance from "../../features/UserAccount/UserInfo";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import "@testing-library/jest-dom";

describe("testing the UserPaymentInfo component", () => {
  test("every input is in the document and the add payment button", () => {
    render(
      <Provider store={store}>
        <UserInsuranceInfo handleSubmitInsurance={handleSubmitInsurance} />
      </Provider>
    );
    const nameOnInsurance = screen.getByTestId("nameOnInsurance");
    const insuranceCompany = screen.getByTestId("insuranceCompany");
    const insuranceFile = screen.getByTestId("insuranceFile");
    const addInsuranceButton = screen.getByRole("button", {
      name: "Upload Insurance Information",
    });

    expect(nameOnInsurance).toBeInTheDocument();
    expect(insuranceCompany).toBeInTheDocument();
    expect(insuranceFile).toBeInTheDocument();
    expect(addInsuranceButton).toBeInTheDocument();
  });
});
