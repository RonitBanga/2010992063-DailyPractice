import PropTypes from "prop-types";
const Button = (color, text, onClick1) => {
    return(
        <button onClick = {onClick}
        style = {{backgroundColor:color}} 
        className = "btn"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    color
}