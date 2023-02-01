import React from "react";
import Bookmark from "./bookMark";
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
        <Bookmark
          bookmark={props.onBookMark}
          user={props.user._id}
          flag={props.user.bookmark}
        />
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
