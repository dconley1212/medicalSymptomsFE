import Reviews from "../../features/Reviews/Reviews";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("testing the Review component", () => {
  test("the document title is on the page", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/reviews">
            <Reviews />
          </Route>
        </Routes>
      </BrowserRouter>
    );

    const title = screen.getByText("What are people saying about our products");
    expect(title).toBeInTheDocument();
  });
});
