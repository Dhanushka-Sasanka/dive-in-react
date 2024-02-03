
import "./Card.css"

// this is a wrapper class for content 
function Card(props) {

    const classes = "card ".concat(props.className)
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;