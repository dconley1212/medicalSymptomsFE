import Survey from "../../features/Questionaire/Survey";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import "@testing-library/jest-dom";

describe("testing the survey component", () => {
  test("survey component renders correctly", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
  });

  test("survey questions with text area to be in the document", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const firstQuestion = screen.getByLabelText("What is your height?");
    const secondQ = screen.getByLabelText("What is your weight?");
    const thirdQ = screen.getByLabelText("Where is the back pain located?");
    const fourthQ = screen.getByLabelText("How often is the pain occuring?");

    expect(firstQuestion).toBeInTheDocument();
    expect(secondQ).toBeInTheDocument();
    expect(thirdQ).toBeInTheDocument();
    expect(fourthQ).toBeInTheDocument();
  });

  test("questions in paragraph elements", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const firstParagraphQ = screen.getByText(
      "Have you experienced fever or chills?"
    );
    const secondParagraphQ = screen.getByText(
      "Have you ever experienced serious weight loss?"
    );
    const thirdParagraphQ = screen.getByText(
      "Have you ever experienced a traumatic physical event?"
    );
    const fourthParagraphQ = screen.getByText(
      "Are you having trouble urinating?"
    );
    const fifthParagraphQ = screen.getByText(
      "Do you have numbness and tingling in your legs?"
    );
    expect(firstParagraphQ).toBeInTheDocument();
    expect(secondParagraphQ).toBeInTheDocument();
    expect(thirdParagraphQ).toBeInTheDocument();
    expect(fourthParagraphQ).toBeInTheDocument();
    expect(fifthParagraphQ).toBeInTheDocument();
  });
  test("user can type into height and wieght text inputs", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const userHeight = 6;
    const userWeight = 190;
    const firstQuestion = screen.getByLabelText("What is your height?");
    const secondQ = screen.getByLabelText("What is your weight?");
    fireEvent.change(firstQuestion, { target: { value: userHeight } });
    fireEvent.change(secondQ, { target: { value: userWeight } });

    expect(firstQuestion).toBe(6);
    expect(secondQ).toBe(190);
  });
  test("user can click on radio button inputs", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const radioYesInputs = screen.getAllByRole("radio", { name: "Yes" });
    const radionNoInputs = screen.getAllByRole("radio", { name: "No" });

    radionNoInputs.forEach((button) => {
      fireEvent.click(button);
      expect(button).toEqual("No");
    });
    radioYesInputs.forEach((button) => {
      fireEvent.click(button);
      expect(button).toEqual("Yes");
    });
  });
  test("default option is showing and all options are available to use", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const defaultOption = screen.getByRole("option", {
      name: "Select a region on your back",
    });
    expect(defaultOption.ariaSelected).toBe(true);
    const allOptions = screen.getAllByRole("option");
    expect(allOptions.length).toBe(6);
  });
  test("dropdown is working and user can make selection", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const upperLeftRegionOption = screen.getByRole("option", {
      name: "upper left region",
    });
    const upperRightRegionOption = screen.getByRole("option", {
      name: "upper right region",
    });
    const middleRegionOption = screen.getByRole("option", {
      name: "middle region",
    });
    const lowerLeftRegionOption = screen.getByRole("option", {
      name: "lower left region",
    });
    const lowerRightRegionOption = screen.getByRole("option", {
      name: "lower right region",
    });

    fireEvent.click(upperLeftRegionOption);
    expect(upperLeftRegionOption.ariaSelected).toBe(true);
    fireEvent.click(upperRightRegionOption);
    expect(upperRightRegionOption.ariaSelected).toBe(true);
    fireEvent.click(middleRegionOption);
    expect(middleRegionOption.ariaSelected).toBe(true);
    fireEvent.click(lowerLeftRegionOption);
    expect(lowerLeftRegionOption.ariaSelected).toBe(true);
    fireEvent.click(lowerRightRegionOption);
    expect(lowerRightRegionOption.ariaSelected).toBe(true);
  });
  test("consult your doctor message is showing when only fever sympotm is selected", async () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const feverRadioButton = screen.getByTestId("feverSymptoms-Yes");
    const weightLossRadioButton = screen.getByTestId("weightLoss-No");
    const traumaEventRadioButton = screen.getByTestId("traumaEvent-No");
    const troubleUrinatingRadioButton = screen.getByTestId(
      "troubleUrinating-No"
    );
    const legSymptomsRadioButton = screen.getByTestId("legSymptoms-No");
    fireEvent.click(feverRadioButton);
    fireEvent.click(weightLossRadioButton);
    fireEvent.click(traumaEventRadioButton);
    fireEvent.click(troubleUrinatingRadioButton);
    fireEvent.click(legSymptomsRadioButton);

    const submitButton = screen.getByRole("button", { name: "submit" });
    fireEvent.click(submitButton);

    const paragraph = await screen.findByText(
      "We recommend seeing your Doctor based on your symptoms"
    );

    expect(paragraph).toBeInTheDocument();
  });
});
