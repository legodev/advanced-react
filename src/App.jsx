import { useReducer} from 'react'

// action = {type: string, payload: any}
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { counter: state.counter + 10 }
    case 'remove':
      return { counter: state.counter - 10 }
    case 'set':
      return { counter: action.payload }
    default:
      return state
  }
}

export default function App() {
  const initialValue = { counter: 100 }

  const [state, dispatch] = useReducer(reducer, initialValue)
  console.log(state)

  const set = 0

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>Add</button>
      <button onClick={() => dispatch({ type: 'remove' })}>Remove</button>
      <button onClick={() => dispatch({ type: 'set', payload: set })}>
        Set
      </button>
    </div>
  )
}
