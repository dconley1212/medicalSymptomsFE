import LandingPage from "../Components/LandingPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FaBlackberry } from "react-icons/fa";

describe("testing the landing page component", () => {
  test("renders without crashing", () => {
    render(<LandingPage />);
  });

  test("title shows up on landing page", () => {
    render(<LandingPage />);
    const title = screen.getByText(/tired of back pain/i);
    expect(title).toBeInTheDocument();
  });

  test("button has correct initial text", () => {
    render(<LandingPage />);
    const buttonText = screen.getByRole("button", {
      name: /want a doctors recomendation/i,
    });

    expect(buttonText).toBeInTheDocument();
  });

  test("button has correct initial color", () => {
    render(<LandingPage />);
    const button = screen.getByRole("button");

    expect(button).toHaveStyle({ backgroundColor: "black" });
  });
});
