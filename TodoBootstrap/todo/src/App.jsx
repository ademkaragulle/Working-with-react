import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import CreateTask from './CreateTask'

function App() {
  const [count, setCount] = useState(0)


  const addTask = (newTask) => {
    console.log(newTask)
  }
  return (
    <div className='App'>
      <Header />
      <CreateTask onAdd={addTask} />
    </div>
  )
}

export default App
