import LandingPage from "../Components/LandingPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("testing the landing page componet", () => {
  test("renders without crashing", () => {
    render(<LandingPage />);
  });

  test("title shows up on landing page", () => {
    render(<LandingPage />);
    const title = screen.getByText(/tired of back pain/i);
    expect(title).toBeInTheDocument();
  });

  test("stat shows up in the landing page", () => {
    render(<LandingPage />);
    const buttonText = screen.getByRole("button", {
      name: /want a doctors recomendation/i,
    });

    expect(buttonText).toBeInTheDocument();
  });
});
