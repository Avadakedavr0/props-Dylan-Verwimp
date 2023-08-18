import './App.css'
import { useState } from 'react'
import Task from './Task.js'
function App() {
    const [tasks, setTasks] = useState([
        {text: 'Go to gym', checked: true },
        {text: 'Drink coffee', checked: false },
    ])
    const [hideTasks, setHideTasks] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO Add a new task to the tasks array
        // HINT: Spread the current tasks array into a new array, add this new task on there
        // then update the state of tasks
        const newTask = {text: event.target[0].value, checked: false}
        setTasks([...tasks, newTask])
    }

    const handleDelete = (indexDelete) => {
        // TODO Using the provided index, remove the task from the array and update
        // state to re-render the component
        // HINT: .filter()
        const newTasks = tasks.slice()
        newTasks.splice(indexDelete, 1)
        setTasks(newTasks)
      }
    

    const handleUpdate = (indexUpdate, checked) => {
        // TODO Find the task by the provided index
        // Change the checked property on the task
        // Update the state array to re-render the component
        // HINT: .map() or access by index
        const updatedTasks = tasks.map((a, b) =>
            b === indexUpdate ? { ...a, checked } : a
        )
        setTasks(updatedTasks)
    }

    return (
      <div className='app'>
          <main>
              <form onSubmit={handleSubmit}>
                  <input type="text" name="task" />
                  <button type="submit">add task</button>
              </form>

              <button onClick={() => setHideTasks(!hideTasks)}>Hide tasks</button>

              <Task
                  tasks={hideTasks ? tasks.filter(task => !task.checked) : tasks}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
              />
          </main>
      </div>
  );
}

export default App;