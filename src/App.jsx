import { useState } from 'react'
import './App.css'

// function App() {
//   const [stars, setStars] = useState(5)
//   const [comments, setComments] = useState('')

//   function handleSubmit(e) {
//     e.preventDefault()
//     console.log(stars)
//     console.log(comments)
//     setStars(5)
//     setComments('')
//   }

//   function handleChange(e) {
//     setStars(e.target.value)
//   }

//   function handleChangeComments(e) {
//     setComments(e.target.value)
//   }

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Research</legend>
//           <h2>Feedback form</h2>
//           <div className="field">
//             <label htmlFor="stars">Stars: {stars}⭐</label>
//             <input
//               width={200}
//               type="range"
//               name="stars"
//               id=""
//               value={stars}
//               onChange={handleChange}
//               max={10}
//             />
//           </div>
//           <div className="field">
//             <label htmlFor="feedback">Message</label>
//             <textarea
//               name="feedback"
//               value={comments}
//               id=""
//               cols="30"
//               rows="10"
//               onChange={handleChangeComments}
//             ></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </fieldset>
//         {/* <p>{comments}</p> */}
//       </form>
//     </div>
//   )
// }
// export default App

import './App.css'
import { validateEmail } from './utils'

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  )
}

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState({
    value: '',
    isTouched: false,
  })
  const [role, setRole] = useState('role')

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== 'role'
    )
  }
  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword({
      value: '',
      isTouched: false,
    }),
      setRole('role')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getIsFormValid()
    alert('Account created!')
    clearForm()
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              type="password"
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              onBlur={() => setPassword({ ...password, isTouched: true })}
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
