import React from "react";

const Qualiti = (props) => {
    return (
        <div
            className={`badge bg-${props.qualiti.color}`}
            id="qualiti"
            key={props.qualiti._id}
        >
            {props.qualiti.name}
        </div>
    );
};

export default Qualiti;
