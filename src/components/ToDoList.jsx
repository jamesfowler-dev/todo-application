import ToDoItem from "./ToDoItem.jsx"

const ToDoList = (props) => {

    const { items, handleClick } = props;

        return (
            <div>
                {items.map((item, index) => (
                        <ToDoItem 
                            key={index}
                            item={item}
                            handleClick={() => handleClick(index)}
                        />
                    ))
                }

            </div>

        )
}


export default ToDoList;