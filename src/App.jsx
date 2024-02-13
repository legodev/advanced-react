import { useState } from 'react'
import './App.css'
import GoalForm from './components/GoalForm'

function App() {
  const [allGoals, updateAllGoals] = useState([])

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal])
  }

  function ListOfGoals({ data }) {
    return (
      <ul>
        {data.map((g) => {
          return (
            <li key={g.goal}>
              <p>
                {g.goal} -- {g.by}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }

  console.log(allGoals)

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals data={allGoals} />
    </div>
  )
}
export default App
