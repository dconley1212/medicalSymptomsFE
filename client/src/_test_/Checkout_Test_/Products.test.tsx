import Products from "../../features/Checkout/Products";
import Survey from "../../features/Questionaire/Survey";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { store } from "../../app/store";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

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

  test("checkout component is showing after add button is clicked and correct quantity is being displayed", async () => {
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
    const totalQuantity = screen.getByText(`Total Quantity: ${4}`);
    expect(totalQuantity).toHaveTextContent(`Total Quantity: ${4}`);
  });
  test("click add itemOne and correct item, price, and quantity show up", () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );
    const addButtons = screen.getAllByRole("button", { name: "+" });
    fireEvent.click(addButtons[0]);
    const orderSummary = screen.getByRole("heading", { name: "Order Summary" });
    const productName = screen.getByTestId("ItemOne");
    const productPrice = screen.getByTestId("productPriceOne");
    const totalQuantity = screen.getByText(`Total Quantity: ${5}`);
    const totalPrice = screen.getByText(`Total Price: ${165.95}`);

    expect(orderSummary).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(totalQuantity).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });
  test("delete buttons will delete each item from Order Summary", () => {
    render(
      <Router>
        <Provider store={store}>
          <Products />
        </Provider>
      </Router>
    );

    const deleteButtons = screen.getAllByRole("button", { name: "-" });
    deleteButtons.forEach((button) => {
      fireEvent.click(button);
    });

    const totalQuantity = screen.getByText(`Total Quantity: ${3}`);
    expect(totalQuantity).toBeInTheDocument();
    expect(totalQuantity).toHaveTextContent(`Total Quantity: ${3}`);
  });
});
