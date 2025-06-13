import { useState } from 'react';
const UserEvents = () => {
  const [counter, setCounter] = useState(0)

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={handleIncreaseCounter}>Increase Counter</button>
    </div>
  )
}

export default UserEvents
