import React from "react";
import PropTypes from "prop-types";

const Bookmark = (props) => {
    return (
        <button
            onClick={() => props.bookmark(props.user)}
            className={props.flag ? "bi bi-bookmark-check" : "bi bi-bookmark"}
        ></button>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired,
    flag: PropTypes.bool.isRequired
};

export default Bookmark;
