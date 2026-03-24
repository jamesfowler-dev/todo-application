import { useState, useEffect } from "react";
import HarryPotter from "../components/HarryPotter.jsx";
  
// API call 
const HarryPotterList = () => {

        const [ characters, setCharacters] = useState([]);

        const getCharacters = () => {

            fetch('https://potterapi-fedeperin.vercel.app/en/characters')
            .then((res) => {
                return res.json(); 
            })   
            .then((data) => {
                setCharacters(data)
            })  
        }

        const removeCharacters = () => {
            setCharacters("")
        }

        // useEffect((setCharacters), [])
        
    return (
        <div> 

        <button onClick={getCharacters}>Click for Harry Potter!</button>
        <button onClick={removeCharacters}>Click to remove Harry Potter!</button>

        {characters && characters.map((character) => {
            return <HarryPotter 
                        character={character}
                    />
        })}

        </div>
    )
    
}

  export default HarryPotterList