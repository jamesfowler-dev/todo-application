import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const InputBar = (props) => {

    const { handleSubmit } = props



    return (
    <form onSubmit={handleSubmit}>
        <div className="inputbar"> 
            <label></label>
            <input 
                className="inputbar"
                type="text" 
                placeholder="Add your task here...">
            </input>
            <button className="inputBar-button" type="submit">
                {/* Add task button */}
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </form>
    )
}

export default InputBar