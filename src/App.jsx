import { useRef, useState } from 'react'
import './App.css'

function App() {
  let inputRef = useRef(null)
  // const [data,setData] = useState(null)
  const [data2,setData2] = useState("")

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
          <input ref={inputRef} value={data2} type="text" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        {/* <p>{data}</p> */}
        <p>{data2}</p>
      </div>
    </>
  )
}

export default App
