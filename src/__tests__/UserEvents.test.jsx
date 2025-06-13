import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserEvents from '../components/UserEvents'
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

    // Need to Stimulate the User Action of Clicking the Button ....
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
