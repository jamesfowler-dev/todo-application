const InputBar = (props) => {

    const { handleSubmit } = props



    return (
    <form onSubmit={handleSubmit}>
        <label></label>
        <input 
            type="text" 
            placeholder="Add your task here...">
            
        </input>
        <button type="submit">Add</button>
    </form>
    )
}

export default InputBar