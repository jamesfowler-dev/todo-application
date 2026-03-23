import './ToDoItem.css'

const ToDoItem = (props) => {

    const { item, handleClick, handleDelete } = props
   

    return (
        <div>
            <input 
                type="checkbox" 
                onClick={handleClick}
                checked={item.completed}
            />
            <span className={item.completed ? "completed" : ""}>
                {item.text}
            </span>
            <button type="submit" onClick={handleDelete}>Delete</button>
            
        </div>
    )
}

export default ToDoItem