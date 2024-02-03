import ConceptsItem from "./ConceptItem";


function Concepts(props) {

    return (
        <ul id="concepts">

            <ConceptsItem
                componentsImage={props.conceptsList[0].image}
                titel={props.conceptsList[0].titel}
                description={props.conceptsList[0].description}
            />

            <ConceptsItem
                componentsImage={props.conceptsList[1].image}
                titel={props.conceptsList[1].titel}
                description={props.conceptsList[1].description}
            />

            <ConceptsItem
                componentsImage={props.conceptsList[2].image}
                titel={props.conceptsList[2].titel}
                description={props.conceptsList[2].description}
            />

            {/* <li className="concept">
                <img src={props.componentsImage} alt="TODO: TITLE" />
                <h2>TODO: TITLE</h2>
                <p>TODO: DESCRIPTION</p>
            </li>

            <li className="concept">
                <img src={props.componentsImage} alt="TODO: TITLE" />
                <h2>TODO: TITLE</h2>
                <p>TODO: DESCRIPTION</p>
            </li> */}

        </ul>
    );

}

export default Concepts;