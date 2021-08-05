
function ToDoListItemComponent({ task, onTaskChange }) {
    const handleDoneChange = () => {
        onTaskChange({ ...task, done: !task.done })
    }

    return (
        <div>
            <input type="checkbox" checked={ task.done } onChange={ handleDoneChange }/>
            { task.description }
        </div>
    );
}

export default ToDoListItemComponent;
