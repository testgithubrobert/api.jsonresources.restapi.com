/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function OfflinePage(props) {
    return (
        <>  
            <section className="offline-page">
                <h1>{props.message}</h1>
                <br />
            </section>
        </>
    );  
}

OfflinePage.proptypes = {
    message: PropTypes.string
}

export default OfflinePage;