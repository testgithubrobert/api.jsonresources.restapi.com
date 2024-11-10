/* eslint-disable react/prop-types */ 
import PropTypes from "prop-types";

function Header(props) {
    return (
        <header className="header" id="header">
            <article>
                <h1>JSON Resources {String("{}")}</h1>
                <br />
                <p>{props.content}</p>
                <br />
                <a href="/token/register"><button type="button">Get Token</button></a>
            </article>
        </header>
    );
}

// set prop types
Header.proptypes = {
    content: PropTypes.string
}

export default Header; 