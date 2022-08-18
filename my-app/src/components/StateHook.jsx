import React, { useState } from 'react'

const StateHook = () => {
  const [counter, setCounter] = useState(0)   
  const increase = () => {
      setCounter(counter + 1)
  }
  const decrease = () => {
      setCounter(counter - 1)
  }

  return (
    <div>
        <p>Counter: {counter}</p>
        <button onClick={() => increase()}>
            Increase
        </button>
        <button onClick={() => decrease()}>
            Decrease
        </button>
    </div>
  )
}

export default StateHook