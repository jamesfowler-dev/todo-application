import ToDoItem from "./ToDoItem.jsx"

const ToDoList = (props) => {

    const { items, handleClick, handleDelete } = props;

        return (
            <div>
                {items.map((item, index) => (
                        <ToDoItem 
                            key={index}
                            item={item}
                            handleClick={() => handleClick(index)}
                            handleDelete={() => handleDelete(index)}
                        />
                    ))
                }

            </div>

        )
}


export default ToDoList;