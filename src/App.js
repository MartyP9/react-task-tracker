// import React from 'react'
// import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks ]= useState([
  {
    id: 1,
    text:"doctors appt",
    day: 'June 25th',
    reminder: 'true'
  },
  {
    id: 2,
    text:"Meeting with Boss",
    day: 'June 28th',
    reminder: 'false'
  },{
    id: 3,
    text:"Flight to Canada",
    day: 'July 1st',
    reminder: 'true'
  },
])

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000)+1
    const newTask ={id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id)=> {
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  // Toggle reminder
  const toggleReminder = (id)=> {
    setTasks(tasks.map((task) => task.id===id ? {...task, reminder: !task.reminder }: task))
  }
  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> : 'No Tasks to Show' }
    </div>
  )
}

//class App extends React.Component{
//   render(){
//   return <h1> Hello from a class</h1>
// }
// }

export default App;
