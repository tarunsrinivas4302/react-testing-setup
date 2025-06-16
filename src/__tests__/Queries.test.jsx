import { expect } from "vitest";
import GetByRole from "../components/RTLQueries";
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

describe.skip("Get By Role Testing", () => {
  test('Renders Correctly', () => {
    render(<GetByRole />);
    const isHeadingPresent = screen.getByRole('heading', { level: 1 })
    const isPTagPresent = screen.getByRole('paragraph');
    const inputElement = screen.getByRole("textbox")
    const selectElement = screen.getByRole("combobox")
    const termsElement = screen.getByRole("checkbox")
    const hiddenBtn = screen.getByRole("button", { name: "Hidden Button", hidden: true });
    const disabledBtn = screen.getByRole("button", { name: "Disabled Button" })
    const submitBtn = screen.getByRole("button", { name: "Submit" })
    const isYoutubeLinkPresent = screen.getByRole("link", { name: "Youtube" })
    const isGoogleLinkPresent = screen.getByRole("link", { name: "Google" })

    const checkBoxLabelElement = screen.getByLabelText("Checkbox", { selector: "input" })
    const UsernameLabelelement = screen.getByLabelText("Username", { selector: "input" })
    const SelectLabelelement = screen.getByLabelText("Username", { selector: "select" })

    const usernamePlaceholder = screen.getByPlaceholderText("username")

    //  getByDisplayValue returns the input , textarea , or select elements that has the matching display value
    const usernamevalue = screen.getByDisplayValue("tarun")

    // getByAltText will return the element that has the given alt text This method only supports elements  which accept an alt attribute like <img>  , <input />, <area> or custom HTML elements...
    const logoImage = screen.getByAltText("logo")

    // getByTitle returns the element that has the matching title attribute
    const closeTitleSpan = screen.getByTitle("close");

    // getByTestId returns the element that has the matching data-testid attribute

    const customIdElement = screen.getByTestId("custom-id-element")

    expect(isHeadingPresent).toBeInTheDocument();
    expect(isPTagPresent).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(hiddenBtn).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(disabledBtn).toBeInTheDocument();
    expect(isGoogleLinkPresent).toBeInTheDocument();
    expect(isYoutubeLinkPresent).toBeInTheDocument();
    expect(checkBoxLabelElement).toBeInTheDocument();
    expect(UsernameLabelelement).toBeInTheDocument();
    expect(SelectLabelelement).toBeInTheDocument();
    expect(usernamePlaceholder).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(closeTitleSpan).toBeInTheDocument();
    expect(customIdElement).toBeInTheDocument();

  })

  it.skip(' should check the checkbox when clicked ', async () => {
    render(<GetByRole />);
    const checkboxelement = screen.getByRole("checkbox", { checked: false }) // By default checkbox is not checked
    expect(checkboxelement).not.toBeChecked(); // Ensuring it is initially unchecked 
    await userEvent.click(checkboxelement); // this will simulate user event for clicking the checkbox
    expect(checkboxelement).toBeChecked();
  })



})
