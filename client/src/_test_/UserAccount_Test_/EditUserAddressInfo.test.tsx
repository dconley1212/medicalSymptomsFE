import EditUserAddressInfo from "../../features/UserAccount/EditUserAddressInfo";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing the EditUserAddressInfo component", () => {
  test("every element is showing when rendered", () => {
    render(
      <Router>
        <Provider store={store}>
          <EditUserAddressInfo />
        </Provider>
      </Router>
    );
    const firstName = screen.getByPlaceholderText("First name");
    const lastName = screen.getByPlaceholderText("Last name");
    const address = screen.getByPlaceholderText("Address");
    const aptSuiteEtc = screen.getByPlaceholderText("Apt., Suite, etc.");
    const city = screen.getByPlaceholderText("City");
    const dropdownLabel = screen.getByText("Choose A State");
    const dropdown = screen.getByTestId("dropdown");
    const zipcode = screen.getByPlaceholderText("Zipcode");
    const submitButton = screen.getByRole("button", {
      name: "Submit Billing Address",
    });

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(aptSuiteEtc).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(dropdownLabel).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(zipcode).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
