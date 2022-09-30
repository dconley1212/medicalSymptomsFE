import Products from "../../features/Checkout/Products";
import Survey from "../../features/Questionaire/Survey";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { store } from "../../app/store";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AsyncLocalStorage } from "async_hooks";

describe("testing the DOM aspects of Products component", () => {
  test("checking if the Products App renders correctly", () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );
  });

  test("Products title shows up", () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );

    const productsTitle = screen.getByTitle("Products Title");
    expect(productsTitle).toBeInTheDocument();
  });

  test("Products review shows up on page", () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );
    const review = screen.getByTitle("review");
    expect(review).toBeInTheDocument();
  });

  test("renders both product cards", () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );
    const productCardOne = screen.getByTestId(1);
    const productCardTwo = screen.getByTestId(2);

    expect(productCardOne).toBeInTheDocument();
    expect(productCardTwo).toBeInTheDocument();
  });

  test("find out here button navigates to survey component when clicked", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );
    const surveyButton = screen.getByRole("button", { name: "Find out here" });

    fireEvent.click(surveyButton);

    render(
      <Router>
        <Provider store={store}>
          <Survey />
        </Provider>
      </Router>
    );
    const heightInput = await screen.findByText("What is your height?");
    expect(heightInput).toBeInTheDocument();
  });

  test("checkoutItems component renders when add product button is clicked", () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );

    const addButtons = screen.getAllByRole("button", { name: "+" });
    addButtons.forEach((button) => {
      fireEvent.click(button);
    });
    const orderSummary = screen.getByRole("heading", { name: "Order Summary" });
    expect(orderSummary).toBeInTheDocument();
  });

  test("checkout component is showing after add button is clicked", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );

    const addButtons = screen.getAllByRole("button", { name: "+" });

    addButtons.forEach((button) => {
      fireEvent.click(button);
    });

    const checkoutComponent = screen.getByTestId("checkoutComponent");

    expect(checkoutComponent).toBeInTheDocument();
  });
});
