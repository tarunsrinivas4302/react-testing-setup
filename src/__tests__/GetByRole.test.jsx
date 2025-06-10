import { expect } from "vitest";
import GetByRole from "../components/GetByRole";
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

describe("Get By Role Testing", () => {
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

        const checkBoxLabelElement = screen.getByLabelText("Checkbox" , {selector : "input"})
        const UsernameLabelelement = screen.getByLabelText("Username" , {selector : "input"})
        const SelectLabelelement = screen.getByLabelText("Username" , {selector : "select"})

        const usernamePlaceholder = screen.getByPlaceholderText("username")

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
    })

    it(' should check the checkbox when clicked ', async () => {
        render(<GetByRole />);
        const checkboxelement = screen.getByRole("checkbox", { checked: false }) // By default checkbox is not checked
        expect(checkboxelement).not.toBeChecked(); // Ensuring it is initially unchecked 
        await userEvent.click(checkboxelement); // this will simulate user event for clicking the checkbox
        expect(checkboxelement).toBeChecked();
    })



})