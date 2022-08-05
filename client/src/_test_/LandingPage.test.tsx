import LandingPage from "../Components/LandingPage";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<LandingPage />);
});
