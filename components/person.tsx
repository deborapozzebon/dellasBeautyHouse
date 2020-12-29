export default function Person(props) {
    return (
        <div className="containerTeam">
            <div className="teamImage">
                <img src={props.image} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}