
import React from "react";

const Bookmark = (props) => {
  
  return (
    <button
      onClick={() => props.bookmark(props.user)}
      className={
        props.flag ? "bi bi-bookmark-check" : "bi bi-bookmark"
      }></button>
  );
};

export default Bookmark;
