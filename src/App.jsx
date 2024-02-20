import { useReducer, useState } from 'react'

// action = {type: string, payload: any}


export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return { counter: state.counter + 10 }
      case 'remove':
        return { counter: state.counter - 10 }
      case 'set':
        return {counter: action.payload}
      default:
        return state
    }
  }
  const initialValue = { counter: 100 }

  const [state, dispatch] = useReducer(reducer, initialValue)
  console.log(state)

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>Add</button>
      <button onClick={() => dispatch({ type: 'remove' })}>Remove</button>
      <button onClick={() => dispatch({ type: 'set', payload: 100 })}>Set</button>
    </div>
  )
}
