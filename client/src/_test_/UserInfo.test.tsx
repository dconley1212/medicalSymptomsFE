import UserInfo from "../features/UserAccount/UserInfo";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { store } from "../app/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing the UserInfo component", () => {
  test("the user info component renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/user/info" element={<UserInfo />} />
          </Routes>
        </Router>
      </Provider>
    );
  });
});
