const HarryPotter = (props) => {

    const { fullName, hogwartsHouse, image } = props.character;

    return (
        <div>
            <h3>{fullName}</h3>
            <p>{hogwartsHouse}</p>
            <img src={image}></img>
        </div>
    )
}

export default HarryPotter