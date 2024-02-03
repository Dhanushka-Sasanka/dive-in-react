

function ConceptsItem(props) {

    return (
        <li className="concept">
            <img src={props.componentsImage} alt={props.titel} />
            <h2>{props.titel}</h2>
            <p>{props.description}</p>  
        </li>
    );
}

export default ConceptsItem;