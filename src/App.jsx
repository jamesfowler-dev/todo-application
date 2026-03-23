import { useState } from 'react'

import InputBar from "./components/InputBar.jsx";
import ToDoItem from "./components/ToDoItem.jsx";
import ToDoList from "./components/ToDoList.jsx";

import './App.css'



function App() {

  const [ items, setItems ] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const newItem = { text: event.target[0].value, 
                      completed: false, 
                    }; 
    setItems([...items, newItem]);
    event.target[0].value = "";
  }

  const handleClick = (index) => {
    setItems(
      items.map(((item, i) =>
          i === index ? { ...item, completed: !item.completed } : item
        )
      )
    )
  }


  return (
    <>
      <h1>Todo Application</h1>
      <InputBar 
        handleSubmit={handleSubmit}
      />
      <ToDoList 
        items={items}
        handleClick={handleClick}
      />
      <button>Reset</button>

    </>
  )
}

export default App
