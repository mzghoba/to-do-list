import ToDoListItemComponent from "../to-do-list-item/ToDoList.component";
import {useState} from "react";
import { getNewTaskId } from "../../utils/task.utils";

const INITIAL_TASKS = [
    { id: 1, description: 'Do HW', done: false },
    { id: 2, description: 'Do HW', done: false }
]

function ToDoListComponent() {
    const [ tasks, setTasks ] =useState(INITIAL_TASKS)
    const [ newTaskDescription, setNewTaskDescription ] = useState('')

    const handleNewTaskDescription = ({ target: { value }}) => {
        setNewTaskDescription(value)
    }

    const handleAddNewTask = () => {
        const newTask = {
            id: getNewTaskId(tasks),
            description: newTaskDescription,
            done: false
        }

        setTasks([newTask, ...tasks])
        setNewTaskDescription('')
    }

    const handleTaskChange = (changedTask) => {
        const updatedTasks = tasks.map(task => {
            return task.id === changedTask.id ? { ...task, ...changedTask } : task
        })
        setTasks(updatedTasks)
    }

    return (
        <div className="to-do-list-container">
            My TO DO list
            <div className="new-item-container">
                <input className="new-item-input" value={ newTaskDescription } onChange={ handleNewTaskDescription }/>
                <button onClick={ handleAddNewTask }>Add</button>
            </div>
            <div className="to-do-list">
                { tasks.map((task) => (
                    <ToDoListItemComponent
                        key={ task.id }
                        task={ task }
                        onTaskChange={ handleTaskChange }
                    />))
                }
            </div>
        </div>
    );
}

export default ToDoListComponent;
