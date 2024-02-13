import { useState } from 'react'
import './App.css'
import GoalForm from './components/GoalForm'

function App() {
  const [allGoals, updateAllGoals] = useState([])

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal])
  }

  console.log(allGoals)
  
  return (
    <div>
      <GoalForm onAdd={addGoal}/>
    </div>
  )
}
export default App
