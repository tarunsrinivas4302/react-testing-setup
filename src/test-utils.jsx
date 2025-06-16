import { render } from '@testing-library/react'

// This file is a Custom Render function  that includes things like global context providers , data stores etc 

const AllTheProviders = ({ children }) => {
  return (
    // Come up with all the Providers
    { children }
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
