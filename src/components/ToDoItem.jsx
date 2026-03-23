import './ToDoItem.css'

const ToDoItem = (props) => {

    const { item, handleClick } = props

    
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
            <button>Delete</button>
            
        </div>
    )
}

export default ToDoItem