import React, { useEffect, useState } from 'react'

const StateHook = () => {
  const [counter, setCounter] = useState(0)  
  const [counter2, setCounter2] = useState(0)  
  const [timer, setTimer] = useState(0)  
  const increase = () => {
      setCounter(counter + 1)
  }
  const decrease = () => {
      setCounter(counter - 1)
  }
  const increase2 = () => {
      setCounter2(counter2 + 1)
  }

  useEffect(() => {
      console.log("useEffect Çalıştı")
  }, [counter])

// componentDidMount >>>> Sayfa ilk açılıdğında bir kere çalışır.
// componentDidUpdate >>>> Component her render olduğunda çalışır.
// useEffect dependancy olmadan çalıştığında componentDidMount ve componentDidUpdate gibi davranır. Hem ilk açıldığında hem de component update olduğunda.
// [] >>> componentDidMount
// [counter] >>> componentDidUpdate
// componentWillUnmount temzilenmesi gereken işlemleri kaldırmak istediğimizde çalıştırırız. 
// useEffect te ise bunu return ile yapıyoruz.

useEffect(() => {
    const myTimer = setInterval(() => {
        setTimer(timer => timer + 1)
    }, 1000)

    return () => clearInterval(myTimer)
})

// console.log('MyTimer :>> ', timer);

  return (
    <div>
        <p>Counter: {counter}</p>
        <p>Counter 2: {counter2}</p>
        <button onClick={() => increase()}>
            Increase
        </button>
        <button onClick={() => decrease()}>
            Decrease
        </button>
        <button onClick={() => increase2()}>
            Increase 2
        </button>
    </div>
  )
}

export default StateHook