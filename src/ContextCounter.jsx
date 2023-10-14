import React, { createContext, useState } from 'react'

function ContextCounter() {

    const counterContext = createContext({count,setCount})

    const [count, setCount] = useState(0);

    function Increment(){
        setCount(value => value +1);
    }

    function Decrement(){
        setCount(value => value -1);
    }

    function Reset(){
        setCount(0);
    }
  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>reset</button>
    </div>
  )
}

export default ContextCounter