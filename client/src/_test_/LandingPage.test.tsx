import LandingPage from "../Components/LandingPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("testing the landing page component", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <Provider store={store}>
          <LandingPage />
        </Provider>
      </Router>
    );
  });

  test("title shows up on landing page", () => {
    render(
      <Router>
        <Provider store={store}>
          <LandingPage />
        </Provider>
      </Router>
    );
    const title = screen.getByText(/tired of back pain/i);
    expect(title).toBeInTheDocument();
  });

  test("button has correct initial text", () => {
    render(
      <Router>
        <Provider store={store}>
          <LandingPage />
        </Provider>
      </Router>
    );
    const buttonText = screen.getByRole("button", {
      name: /want a doctors recomendation/i,
    });

    expect(buttonText).toBeInTheDocument();
  });

  test("button has correct initial color", () => {
    render(
      <Router>
        <Provider store={store}>
          <LandingPage />
        </Provider>
      </Router>
    );
    const button = screen.getByRole("button");

    expect(button).toHaveStyle({ backgroundColor: "black" });
  });
  test("itemName paragraph is displayed in document", async () => {
    render(
      <Router>
        <Provider store={store}>
          <LandingPage />
        </Provider>
      </Router>
    );
    const productNameParagraph = await screen.findByTestId("itemName");
    expect(productNameParagraph).toBeInTheDocument();
  });
  test("comment quote shows up in document", async () => {
    render(
      <Router>
        <Provider store={store}>
          <LandingPage />
        </Provider>
      </Router>
    );
    const quote = await screen.findByTestId("comment");
    expect(quote).toBeInTheDocument();
  });
});
