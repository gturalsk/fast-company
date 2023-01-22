import React from "react";

const SearchStatus = ({ number, phrase, calasses }) => {
  return (
    <div className={calasses(number)}>
      <h5>{`${number} ${phrase}`}</h5>
    </div>
  );
};

export default SearchStatus;
