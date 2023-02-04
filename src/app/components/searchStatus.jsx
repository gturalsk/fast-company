import React from "react";

const SearchStatus = ({ usersLenght, phrase, classes }) => {
    return (
        <div className={classes}>
            <h5>{`${usersLenght} ${phrase}`}</h5>
        </div>
    );
};

export default SearchStatus;
