import { render, screen, logRoles } from '@testing-library/react';
import QueryMultipleElements from '../components/QueryMultipleElements';
import { expect } from 'vitest';
describe('Querying Multiple Elements', () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'React testing library', 'Nodejs', 'Php'];

  test('renders Correctly', () => {
    render(<QueryMultipleElements listProps={skills} />)

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  })

  test('renders a list of props', () => {
    render(<QueryMultipleElements listProps={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length)
  })

  // Text Match patterns 
  // It Includes :: string , regex, function

  // If you want to match a substring we have to pass the object exact false
  test('Substring match', () => {
    render(<QueryMultipleElements />);
    const sometextmatch = screen.getByText("llo Wor", { exact: false });
    expect(sometextmatch).toBeInTheDocument();
  });


  // test match as regex
  test('test match as regex', () => {
    render(<QueryMultipleElements listProps={skills} />);
    const regexTxtPattern1 = screen.getByText(/World/) // substring match
    const regexTxtPattern2 = screen.getByText(/World/i) // susbtring match , ignore case
    const regexTxtPattern3 = screen.getByText(/^hello world$/i) // full string match, ignore case
    expect(regexTxtPattern1).toBeInTheDocument();
    expect(regexTxtPattern2).toBeInTheDocument();
    expect(regexTxtPattern3).toBeInTheDocument();
  })

  // Custom Text Matcher
  // Syntax for this :: (content?: string , element ?: Element | null) => boolean

  const customMatcher = (content = '', element = null) => {
    return content.trim().toLowerCase() === "hello world";
  }

  test('Text matching using a custom function', () => {

    render(<QueryMultipleElements />);
    // Use the custom matcher with getByText
    const element = screen.getByText((content, element) =>
      customMatcher(content, element)
    );
    expect(element).toBeInTheDocument();
  })
});


describe('query by', () => {
  test('Login Button Rendering', () => {
    render(<QueryMultipleElements />)
    const loginBtn = screen.getByRole('button', {
      name: "Login",
    })
    expect(loginBtn).toBeInTheDocument();
  })

  // In Below Test Case if we want to check the role button with name which is not present in the dom by default 
  // so it is throw an error if we use getByRole to avoid this case :: we'll use queryByRole because if no element is not found it returns an empty array

  test('Start Learning Button Not Rendering', () => {
    render(<QueryMultipleElements />)
    const StartLearningBtn = screen.queryByRole('button', {
      name: "Start Reading",
    });
    expect(StartLearningBtn).not.toBeInTheDocument();
  })

})


// Apperance / Disapperance 
// What if elements are not present in the DOM to begin in the DOM to begin but make therir way into the DOM to begin
// what if DOM is present after Some time 
// For Example :: data that is fetched from the server will be rendered only after a few milliseconds
describe('find by', () => {

  // findBy returns a promise which resolves when an element is found which matches  the given query.
  // The Promise is rejected if no element is found or if more than one element is found after the default timeout is 1000ms

  // findAllBy :: Returns a promise which resolves to an array of elements when any elements are found match with the given query
  // Promise is Rejected if no element is found  after default timeout of 1000ms

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'React testing library', 'Nodejs', 'Php'];
  test('Start Reading Button Eventually Rendered', async () => {
    const view = render(<QueryMultipleElements listProps={skills} />)
    logRoles(view.container); // This will print aria roles in the console
    // screen.debug();
    const startLearningBtn = await screen.findByRole('button', {
      name: "Start Reading"
    }, {
      timeout: 2000 // This will be useful when we do a async task that will eventually completed more than 1000ms 
    })
    // screen.debug()
    expect(startLearningBtn).toBeInTheDocument();

  })
})



