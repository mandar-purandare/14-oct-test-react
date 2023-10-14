import React, { useReducer } from 'react'


function Reducer() {

    const initialstate = {count: 0};

    const [state, dispatch] = useReducer[reducer,initialstate];

    function reducer(state, action){
        // console.log(action, state);
        switch (action.type){
            case 'INCREMENT':
            state.count = state.count + 1;
            break;
            case 'DECREMENT':
            state.count = state.count - 1;
            break;
            case 'RESET':
            state.count = 0;
            break;
            default:
            state.count = 0;
        }
    }


    

    function Increment(){
        dispatch({type: 'INCREMENT'});
    }

    function Decrement(){
        dispatch({type: 'DECREMENT'});
    }

    function Reset(){
        dispatch({type: 'RESET'});
    }
  return (
    <div>
        <h2> Counter: {state}</h2>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Reducer