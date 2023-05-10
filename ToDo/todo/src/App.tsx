import { useState, FC, ChangeEvent } from 'react'
import './App.css'
import { todoType } from './apptypes'
import TodoItem from './components/TodoItem'


const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoType[]>([])

  console.log(todoList)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'task') setTask(e.target.value);
    if (e.target.name === 'workDay') setWorkDay(Number(e.target.value));
  }

  const addNewTask = (): void => {
    const newTask = {
      taskName: task,
      workDay: workDay
    }
    setTodoList([...todoList, newTask])
    setTask('')
    setWorkDay(0)
  }

  const deleteTasK = (nameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== nameToDelete
    }))
  }

  return (
    <div className="App">
      <div className='mainCard'>
        <input className='mainCard-input' value={task} type="text" name='task' placeholder='Add to Task...' onChange={handleChange} />
        <input className='mainCard-input' value={workDay} type="number" name='workDay'  placeholder='How many day you will be completed the task' onChange={handleChange} />
        <button className='mainCard-button' onClick={addNewTask}>Add New Task</button>
      </div>
      <div className='card-item'>
        {todoList.map((taskItem: todoType, index: number) => {
          return <TodoItem  key={index} taskItem={taskItem} deleteTask={deleteTasK} />
        })}
      </div>
    </div>
  )
}

export default App
