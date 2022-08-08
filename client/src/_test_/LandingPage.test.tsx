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
});
