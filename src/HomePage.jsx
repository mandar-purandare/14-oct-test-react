import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const router = useNavigate();

    function goTo(string){
        router('/'+ string);
    }

  return (
    <div>
        <button onClick={() => goTo('todo')}>Todo</button>
        <button onClick={() => goTo('reducer')}>Reducer</button>
        <button onClick={() => goTo('login')}>Login</button>
        <button onClick={() => goTo('register')}>Register</button>
        <button onClick={() => goTo('contextcounter')}>Context Counter</button>
        <button onClick={() => goTo('product')}>Product</button>
    </div>
  )
}

export default HomePage