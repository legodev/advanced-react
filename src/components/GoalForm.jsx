import { useState } from 'react'

export default function GoalForm({ onAdd }) {
  const [formData, setFormData] = useState({ goal: '', by: '' })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onAdd(formData)
    setFormData({ goal: '', by: '' })
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Basic Form</legend>
          <label htmlFor="name">Goal: </label>
          <input
            name="goal"
            id="name"
            type="text"
            value={formData.goal}
            onChange={handleChange}
          />
          <label htmlFor="by">By: </label>
          <input
            id="by"
            name="by"
            type="text"
            value={formData.by}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
