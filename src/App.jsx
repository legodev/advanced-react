import { useRef } from "react"

export default function App() {

const inputRef = useRef()

const inputFocus = () => {
  inputRef.current.focus()
}

  return (
    <>
      <h1>Form</h1>
      <input type="text" ref={inputRef} />
      <button onClick={inputFocus}>Click Me!</button>
    </>
  )
}
