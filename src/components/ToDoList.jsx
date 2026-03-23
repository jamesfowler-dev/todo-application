import ToDoItem from "./ToDoItem.jsx"

const ToDoList = (props) => {

    const { items } = props;

        return (
            <div>
                {items.map((item, index) => (
                        <ToDoItem 
                            key={index}
                            item={item}
                        />
                    ))
                }

            </div>

        )
}


export default ToDoList;