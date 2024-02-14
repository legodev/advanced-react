import { useState } from 'react'
import './App.css'
import GoalForm from './components/GoalForm'
import ListOfGoals from './components/ListOfGoals'

function App() {
  const [allGoals, updateAllGoals] = useState([])

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal])
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
