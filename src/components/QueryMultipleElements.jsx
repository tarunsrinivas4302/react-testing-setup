import { useEffect } from "react"
import { useState } from "react"

const QueryMultipleElements = ({ listProps = [] }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500)
  }, []);
  return (
    <div>
      <ul>
        {
          listProps.map((item) => {
            return <li key={item}></li>
          })
        }
      </ul>
      <div>Hello World</div>
      {
        isLoggedIn ? <button>Start Reading</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </div>
  )
}

export default QueryMultipleElements
