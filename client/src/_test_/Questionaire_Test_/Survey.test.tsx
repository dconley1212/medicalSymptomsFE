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
    const firstQuestion = screen.getByText("What is your height?");
    const secondQ = screen.getByText("What is your weight?");
    const thirdQ = screen.getByText("Where is the back pain located?");
    const fourthQ = screen.getByText("How often is the pain occuring?");

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
    const userHeight = "6";
    const userHeightInches = "3";
    const userWeight = "190";
    const firstQuestion = screen.getByTestId("heightFeet");
    const secondQ = screen.getByTestId("inches");
    const thirdQ = screen.getByTestId("weight");
    fireEvent.change(firstQuestion, { target: { value: userHeight } });
    fireEvent.change(secondQ, { target: { value: userHeightInches } });
    fireEvent.change(thirdQ, { target: { value: userWeight } });

    expect(firstQuestion).toHaveValue("6");
    expect(secondQ).toHaveValue("3");
    expect(thirdQ).toHaveValue("190");
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
      expect(button).toBeChecked();
    });
    radioYesInputs.forEach((button) => {
      fireEvent.click(button);
      expect(button).toBeChecked();
    });
  });
  test("default option is showing and all options are available to use", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const options = screen.getAllByTestId("Back Options");
    expect(options[0]).toBeInTheDocument();
    expect(options.length).toBe(6);
  });
  test("dropdown is working and user can make selection", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );

    const selectElement = screen.getByTestId("Back Pain");
    fireEvent.change(selectElement, { target: { value: "upper left region" } });
    const options = screen.getAllByTestId("Back Options");
    expect(options[1]).toBeInTheDocument();
  });
  test("consult your doctor message is showing when only fever symptom is selected", async () => {
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

    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);

    const paragraph = await screen.findByText(
      "We recommend seeing your Doctor based on your symptoms."
    );

    expect(paragraph).toBeInTheDocument();
  });

  test("consult your doctor is showing when weight loss question is answered with a yes", async () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );

    const weightLossYesRadio = screen.getByTestId("weightLoss-Yes");
    fireEvent.click(weightLossYesRadio);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);
    const paragraph = await screen.findByText(
      "We recommend seeing your Doctor based on your symptoms."
    );
    expect(paragraph).toBeInTheDocument();
  });
  test("consult your doctor is showing when yes is put for experiencing traumatic evet", async () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );
    const yesRadioButtonTraumaEvent = screen.getByTestId("traumaEvent-Yes");
    fireEvent.click(yesRadioButtonTraumaEvent);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);
    const paragraph = screen.getByText(
      "We recommend seeing your Doctor based on your symptoms."
    );
    expect(paragraph).toBeInTheDocument();
  });
  test("consult your doctor message is showing if user selects yes to trouble urinating", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );

    const troubleUrinatingRadioButtonYes = screen.getByTestId(
      "troubleUrinating-Yes"
    );
    fireEvent.click(troubleUrinatingRadioButtonYes);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);

    const paragraph = screen.getByText(
      "We recommend seeing your Doctor based on your symptoms."
    );
    expect(paragraph).toBeInTheDocument();
  });

  test("consult your doctor message shows when user submits yes to tingling in legs", () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );

    const legSymptomsYesRadioButton = screen.getByTestId("legSymptoms-Yes");
    fireEvent.click(legSymptomsYesRadioButton);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);

    const paragraph = screen.getByText(
      "We recommend seeing your Doctor based on your symptoms."
    );
    expect(paragraph).toBeInTheDocument();
  });
  test("spray recommendation shows if the right information is submited", async () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );

    const heightFeet = screen.getByTestId("heightFeet");
    const inches = screen.getByTestId("inches");
    const weight = screen.getByTestId("weight");

    fireEvent.change(heightFeet, { target: { value: "5" } });
    fireEvent.change(inches, { target: { value: "11" } });
    fireEvent.change(weight, { target: { value: "170" } });

    const noRadioSelection = screen.getAllByRole("radio", { name: "No" });
    noRadioSelection.forEach((button) => {
      fireEvent.click(button);
      expect(button).toBeChecked();
    });
    const button = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(button);

    const paragraph = await screen.findByText(
      "Based on your response, we recommend spraying your back with our product below. This spray works best for acute pain, which based on your symptoms seems like the best route to take."
    );
    expect(paragraph).toBeInTheDocument();
  });
  test("pills recommendation shows when right information is submitted", async () => {
    render(
      <Provider store={store}>
        <Survey />
      </Provider>
    );

    const heightInFeet = screen.getByTestId("heightFeet");
    const inches = screen.getByTestId("inches");
    const weight = screen.getByTestId("weight");

    fireEvent.change(heightInFeet, { target: { value: "5" } });
    fireEvent.change(inches, { target: { value: "10" } });
    fireEvent.change(weight, { target: { value: "200" } });

    const radioButtonsNoValue = screen.getAllByRole("radio", { name: "No" });
    radioButtonsNoValue.forEach((radioButton) => {
      fireEvent.click(radioButton);
      expect(radioButton).toBeChecked();
    });

    const button = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(button);

    const pillsParagraph = await screen.findByText(
      "Based on your response, we recommend taking these pills to help you lose weight because your body mass index is too high. These pills will help you curb your apetite and make it easier to loose weight."
    );
    expect(pillsParagraph).toBeInTheDocument();
  });
});
