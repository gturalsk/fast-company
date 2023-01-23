import React from "react";
import Qualiti from "./qualiti";

const User = (props) => {
  return (
    <tr key={props.user._id}>
      <td>{props.user.name}</td>
      <td>
        {props.user.qualities.map((qualiti) => {
          return <Qualiti qualiti={qualiti} key={qualiti._id} />;
        })}
      </td>

      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate}</td>
      <td>
        <button onClick={() => props.bookMark(props.user._id)}>
          {props.isBookmarked ? (
            <i className="bi bi-bookmark-check"></i>
          ) : (
            <i className="bi bi-bookmark"></i>
          )}
        </button>
      </td>

      <td>
        <button
          onClick={() => props.handleDelete(props.user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
