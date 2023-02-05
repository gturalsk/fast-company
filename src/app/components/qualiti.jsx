import React from "react";
import PropTypes from "prop-types";

const Qualiti = (props) => {
    return (
        <div className={`badge bg-${props.color}`} id="qualiti" key={props.id}>
            {props.name}
        </div>
    );
};

Qualiti.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Qualiti;
