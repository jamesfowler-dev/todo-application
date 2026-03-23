import ToDoItem from "./ToDoItem.jsx"

const ToDoList = (props) => {

    const { items, handleClick, handleDelete } = props;

        return (
            <>
                <>
                    {items.map((item, index) => (
                            <ToDoItem 
                                key={index}
                                item={item}
                                handleClick={() => handleClick(index)}
                                handleDelete={() => handleDelete(index)}
                            />
                        ))
                    }
                </>
            </>

        )
}


export default ToDoList;