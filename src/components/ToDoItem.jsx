import './ToDoItem.css'

const ToDoItem = (props) => {

    const { item } = props

    
    return (
        
        <div>
            <input type="checkbox"></input>
            {item}
            <button>Delete</button>
            
        </div>
    )
}

export default ToDoItem