/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function OfflinePage(props) {
    return (
        <>  
            <nav className="offline-page-nav">
                <span className="logo" id="logo">{String("{}")}</span>
            </nav>
            <section className="offline-page">
                <span className="material-symbols-outlined">wifi_off</span>
                <br />
                <h1>{props.message}</h1>
                <br />
                <button type="button" className="" id="" onClick={(event) => {
                    event.stopPropagation();
                    !window.navigator.onLine ? window.location.reload() : "";
                }}>retry</button>
            </section>
        </>
    );  
}

OfflinePage.proptypes = {
    message: PropTypes.string
}

export default OfflinePage;