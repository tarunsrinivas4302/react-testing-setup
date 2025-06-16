import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserEvents from '../components/UserEvents'
import { expect } from 'vitest';
describe('User Events Component', () => {

  // Testing initial state
  test('renders a count of 0', () => {
    render(<UserEvents />);
    const countElement = screen.getByRole("heading", { level: 1 })
    expect(countElement).toHaveTextContent("0");
  });

  // Let's get Started with the User Interactions
  test('renders a count of 1 after clicking the increment button', async () => {
    user.setup();
    render(<UserEvents />);
    const incrementButton = screen.getByRole('button', { name: 'Increase Counter' })

    // Need to Stimulate the User Action of Clicking the Button ...
    // The Below CLick is a Convience API in a Pointer Interactions ... Some of them are below  :
    // click ,  doubleclick , tripleclick etc
    await user.click(incrementButton)

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(1);
  })


  test('renders a count of 2 after clicking a button twice', async () => {
    user.setup();
    render(<UserEvents />);
    const button = screen.getByRole('button', { name: "Increase Counter" })

    await Promise.all(
      Array.from({ length: 3 }).map(() => user.click(button))
    )

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(3);
  })
})



// Handling Key Interaction Events 

describe('Handling Key Interactions for User Events Component', () => {
  test('Renders a count of 10 After Clicking a Set Button', async () => {
    user.setup();
    render(<UserEvents />)
    const setButton = screen.getByRole('button', { name: "Set" })
    const InputElement = screen.getByRole('spinbutton');
    // type is a Utility API in a KeyBoard Interactions and some of the common Utility API's mentioned below
    // 1. clear() :  which is used to clear an editable element 
    // Example of clear() :- await userEvent.clear(screen.getByRole('textbox')); expect(screen.getByRole('textbox').toHaveValue(''))
    // 2. selectOptions() : it is used to select Elements from select dropdown or list box where you can select multiple elements
    // Example :: await user.selectOptions(screen.getByRole('listbox') , ['1' , 'C']) // 1 and C is either could be label or value
    //        expect(screen.getByRole('option' , {name : 'A'}).selected).toBe(true)
    //        expect(screen.getByRole('option' , {name : 'B'}).selected).toBe(false)
    //        expect(screen.getByRole('option' , {name : 'C'}).selected).toBe(true)
    // 3 . deselectOptions() : It is Used to DeSelect Elements from Select dropdown or list box where you can deselect multiple elements
    // Example :: await user.deselectOptions(screen.getByRole('listbox') , ['2'])
    //        expect(screen.getByRole('option' , {name : 'B'}).selected).toBe(true) 
    // 4. upload() : Which is used to change a file input as if user clicked it and selected files in the resulting file upload dialog
    // Example ::  test('file upload' , async () => { render(<label htmlFor="file-upload">Upload File</label><input type="file" id="file-upload"/>) , 
    //  const file =  new File(['hello'] , 'hello.png', {type : "image/png"})
    //  const input =screen.getByLabelText(/upload file/i)
    //  await userEvent.upload(input ,file)
    //  expect(input.files[0]).toBe(file)
    //  expect(input.files.item[0]).toBe(file)
    //  expect(input.file).toHaveLength(1)
    // })
    await user.type(InputElement, '10')
    expect(InputElement).toHaveValue(10)
    await user.click(setButton);
    const countElement = screen.getByRole("heading", { level: 1 })
    expect(countElement).toHaveTextContent('10')
  })
  test('elements are focused In right Order', async () => {

    user.setup()
    render(<UserEvents />)
    const setButton = screen.getByRole('button', { name: 'Set' })
    const IncrementButton = screen.getByRole('button', { name: 'Increase Counter' })
    const InputElement = screen.getByRole('spinbutton')
    // Here We are Using Tab API which is a Convience API
    await user.tab();
    expect(IncrementButton).toHaveFocus()
    await user.tab();
    expect(InputElement).toHaveFocus()
    await user.tab();
    expect(setButton).toHaveFocus()
  })

  // ClipBoard API's ==> cut ,copy , paste
  // KeyBoard API ==> keyboard('foo') // translates  ==> f,o,o 2) keyboard('{Shift>}'A'{/Shift}') // Translates to : Shift(down), A,Shift(Up)
})
