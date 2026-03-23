import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './ToDoItem.css'

const ToDoItem = (props) => {

    const { item, handleClick, handleDelete } = props
   
    // Using span to keep the content on the same line 
    return (
        <>
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    onClick={handleClick}
                    checked={item.completed}
                />
                <span className={item.completed ? "completed" : ""}>
                    {item.text}
                </span>

                <button className="delete-button" type="submit" onClick={handleDelete}>
                    Delete
                </button>
             </div>
        </>
    )
}

export default ToDoItem