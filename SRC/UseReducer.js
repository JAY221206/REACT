import React, { useReducer} from 'react'
const initialState = 0;

const UseReducer = () => {
    

    const reducer = (state, action) => {
        if(action.type == "INCREMENT")
        {
            return state + 1
        }
        if(action.type == "DECREMENT")
        {
            return state - 1
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Incre</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Decre</button>
    </div>
  )
}

export default UseReducer