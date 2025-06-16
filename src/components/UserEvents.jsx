import { useState } from 'react';
const UserEvents = () => {
  const [counter, setCounter] = useState(0)
  const [amount, setAmount] = useState(0)
  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={handleIncreaseCounter}>Increase Counter</button>
      <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <button onClick={() => setCounter(amount)}>Set</button>
    </div>
  )
}

export default UserEvents
