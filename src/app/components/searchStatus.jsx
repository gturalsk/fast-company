import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ usersLenght, phrase, classes }) => {
    return (
        <div className={classes}>
            <h5>{`${usersLenght} ${phrase}`}</h5>
        </div>
    );
};

SearchStatus.propTypes = {
    usersLenght: PropTypes.number.isRequired,
    phrase: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired
};

export default SearchStatus;
