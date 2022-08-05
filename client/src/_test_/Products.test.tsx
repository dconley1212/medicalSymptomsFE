import Products from "../features/Checkout/Products";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { store } from "../app/store";

describe("testing the Products component", () => {
  test("checking if the Products App renders correctly", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
  });
});
