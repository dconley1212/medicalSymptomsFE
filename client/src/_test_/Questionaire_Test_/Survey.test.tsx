import Survey from "../../features/Questionaire/Survey";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("testing the survey component", () => {
  test("survey component renders correctly", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
  });
});
