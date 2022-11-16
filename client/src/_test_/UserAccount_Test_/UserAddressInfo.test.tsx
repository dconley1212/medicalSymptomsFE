import UserAddressInfo from "../../features/UserAccount/UserAddressInfo";
import handleSubmit from "../../features/UserAccount/UserInfo";
import setMessage from "../../features/UserAccount/UserInfo";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe("testing the UserAddresInfo component", () => {
  test("form shows up in the document", () => {
    render(
      <Router>
        <Provider store={store}>
          <UserAddressInfo
            handleSubmit={handleSubmit}
            setMessage={setMessage}
          />
        </Provider>
      </Router>
    );
    const firstName = screen.getByTestId("firstName");
    const lastName = screen.getByTestId("lastName");
    const address = screen.getByTestId("address");
    const aptSuite = screen.getByTestId("apartment_suite_etc");
    const city = screen.getByTestId("city");
    const labelDirections = screen.getByText("Use dropdown to pick your state");
    const dropdown = screen.getByTestId("dropdown");
    const zipcode = screen.getByTestId("zipcode");
    const submitButton = screen.getByRole("button", {
      name: "Submit Billing Address",
    });

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(aptSuite).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(labelDirections).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(zipcode).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
