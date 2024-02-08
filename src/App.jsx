import { useRef, useState } from 'react'
import './App.css'

function App() {
  let inputRef = useRef(null)
  // const [data,setData] = useState(null)
  const [data2, setData2] = useState('')
  let buttonRef = useRef(null)
  const [dis, setDis] = useState(true)
  function handleSubmit(e) {
    e.preventDefault()
    // const inputValue = inputRef.current.value
    // setData(inputValue)

    setData2("")
    // inputRef.current.value = null
  }
  function handleChange(e) {
    setData2(e.target.value)
  }
  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact</legend>
            <label htmlFor="name">Name: </label>
            <input
              id='name'
              placeholder="Your name"
              ref={inputRef}
              value={data2}
              type="text"
              onChange={handleChange}
            />
            <button disabled={!data2} type="submit">
              Submit
            </button>
          </fieldset>
        </form>
        {/* <p>{data}</p> */}
        <p>{data2}</p>
      </div>
    </>
  )
}

export default App
