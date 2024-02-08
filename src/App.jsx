import { useState } from 'react'
import './App.css'

function App() {
  const [stars, setStars] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(stars)
    setStars('')
  }

  function handleChange(e) {
    setStars(e.target.value)
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Research</legend>
          <h2>Feedback form</h2>
          <div>
            <label htmlFor="stars">Stars</label>
            <input
              width={200}
              type="range"
              name="stars"
              id=""
              value={stars}
              onChange={handleChange}
              max={10}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
export default App
