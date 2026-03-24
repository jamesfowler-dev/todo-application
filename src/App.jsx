import { useState } from 'react'

import InputBar from "./components/InputBar.jsx";
import ToDoList from "./components/ToDoList.jsx";
import HarryPotterList from "./containers/HarryPotterList.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

import './App.css'



function App() {

  const [ items, setItems ] = useState([]);

  // Function to add the input to a new item
  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Create a new object with the input and whether its been completed yet so we can toggle later
    const newItem = { text: event.target[0].value, 
                      completed: false, 
                    }; 
    // Set the state of a new array with the new item or items in it
    setItems([newItem, ...items]);
    // Clears the inputBar
    event.target[0].value = "";
  }


  // Function to add strikethrough to completed items
  const handleClick = (index) => {
    setItems(
      items.map(((item, i) =>
          // Condition to check if the item in the array is the one being checked/completed. Returning regular item if not
          i === index ? { ...item, completed: !item.completed } : item
        )
      )
    )
  }


  // Delete button functionality, filters through the items array and only returns items whose index is different to the one being deleted 
  const handleDelete = (index) => {
    setItems(
      items.filter(((item, i) =>
          i !== index
      ))
    )
  }


  // Reset button which just sets state to an empty array
  const handleReset = (event) => { 
    setItems([]);
  }


  return (

      <div>
        <div>
          <h1>Todo-List</h1>
          <h2>Feel free to add, complete, delete and reset</h2>

        </div>
        <div>
          <InputBar 
            handleSubmit={handleSubmit}
        />
        </div>
        <div className="container">
          <ToDoList 
            items={items}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
          <div className="reset-button">
            <button type="reset" onClick={handleReset}>
              {/* Reset  */}
              <FontAwesomeIcon icon={faArrowRotateLeft} />
            </button>
          </div>
        </div>
        <div>
          <HarryPotterList />
        </div>
      </div>
  )
}

export default App
