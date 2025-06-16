import { useState } from "react"

const useCounter = (props) => {
  const [counter, setCounter] = useState(props?.initialCount || 0);
  const incrementCounter = () => setCounter((prev) => prev + 1);
  const decrementCounter = () => setCounter((prev) => prev - 1);

  return {
    counter,
    incrementCounter,
    decrementCounter
  }
}

export default useCounter
