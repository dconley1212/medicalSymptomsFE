import Products from "../features/Checkout/Products";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { store } from "../app/store";
import "@testing-library/jest-dom";

describe("testing the DOM aspects of Products component", () => {
  test("checking if the Products App renders correctly", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
  });

  test("Products title shows up", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    const productsTitle = screen.getByTitle("Products Title");
    expect(productsTitle).toBeInTheDocument();
  });

  test("Products review shows up on page", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    const review = screen.getByTitle("review");
    expect(review).toBeInTheDocument();
  });

  test("renders both product cards", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    const productCardOne = screen.getByTestId(1);
    const productCardTwo = screen.getByTestId(2);

    expect(productCardOne).toBeInTheDocument();
    expect(productCardTwo).toBeInTheDocument();
  });

  test("checkoutItems component renders when add product button is clicked", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    const addButtons = screen.getAllByRole("button", { name: "+" });
    addButtons.forEach((button) => {
      fireEvent.click(button);
    });
    const orderSummary = screen.getByRole("heading", { name: "Order Summary" });
    expect(orderSummary).toBeInTheDocument();
  });
});
