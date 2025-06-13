import React from 'react'

const GetByRole = () => {
  return (
    <div>
      <h1>This is a heading</h1>
      <p>This is a paragraph</p>
      <span data-testid="custom-element">Custom Element</span>
      <img src="/logo.svg" alt="logo-image" />
      <button>Click me</button>
      <button name='Disabled Button' disabled>Disabled Button</button>
      <button>Hidden Button</button>
      <a href="https://www.youtube.com">Youtube</a>
      <a href="https://www.google.com">Google</a>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder='username' value="Tarun" onChange={() => { }} />
        </div>
        <div>
          <label htmlFor="job-location">Username</label>
          <select name="" id="job-location">
            <option value="">Select a country</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="chennai">Chennai</option>
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>

        <label htmlFor="checkbox">Checkbox</label>
        <input type="checkbox" id="checkbox" />

        <button type="submit">Submit </button>
      </form>
    </div>
  )
}

export default GetByRole
