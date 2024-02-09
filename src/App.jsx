import { useState } from 'react'
import './App.css'

function App() {
  const [stars, setStars] = useState(5)
  const [comments, setComments] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(stars)
    console.log(comments)
    setStars(5)
    setComments('')
  }

  function handleChange(e) {
    setStars(e.target.value)
  }

  function handleChangeComments(e) {
    setComments(e.target.value)
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Research</legend>
          <h2>Feedback form</h2>
          <div className="field">
            <label htmlFor="stars">Stars: {stars}⭐</label>
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
          <div className="field">
            <label htmlFor="feedback">Message</label>
            <textarea
              name="feedback"
              value={comments}
              id=""
              cols="30"
              rows="10"
              onChange={handleChangeComments}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
        {/* <p>{comments}</p> */}
      </form>
    </div>
  )
}
export default App
