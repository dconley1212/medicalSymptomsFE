import Header from "../Components/Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing the header component", () => {
  test("check every link is showing in the header document", async () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const createAccountLink = screen.getByRole("link", {
      name: "Create Account",
    });
    const loginLink = screen.getByRole("link", { name: "Login" });
    const productsLink = screen.getByRole("link", { name: "Products" });
    const reviewsLink = screen.getByRole("link", { name: "Reviews" });
    const checkoutLink = screen.getByRole("link", { name: "Checkout" });
    const myAccountLink = screen.getByRole("link", { name: "My Account" });
    expect(createAccountLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
    expect(reviewsLink).toBeInTheDocument();
    expect(checkoutLink).toBeInTheDocument();
    expect(myAccountLink).toBeInTheDocument();
  });
});
