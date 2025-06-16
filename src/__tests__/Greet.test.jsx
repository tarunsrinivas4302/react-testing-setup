import { render, screen } from '@testing-library/react'
import Greet from './../components/Greet'

describe.skip('Greet ', () => {
  test('Compoent Render', () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  })

  describe('', () => {
    it('Component with a Name', () => {
      render(<Greet name="Tarun" />)
      const textElement = screen.getByText("Hello Tarun");
      expect(textElement).toBeInTheDocument();
    })
  })
})
