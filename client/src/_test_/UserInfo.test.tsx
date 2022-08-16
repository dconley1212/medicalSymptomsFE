import UserInfo from "../features/UserAccount/UserInfo";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
// import { setup } from "@testing-library/user-event";
import { store } from "../app/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const user = setup({
//   skipPointerEventsCheck: true,
//   keyboardMap: [{ key: '"', code: "Digit2", shiftKey: true }],
// });

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
