import React from "react";
import Qualiti from "./qualiti";

const User = (props) => {
  //console.log(props);
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
        <button
          onClick={() => props.onBookMark(props.user._id)}
          className={
            props.user.bookmark ? "bi bi-bookmark" : "bi bi-bookmark-check"
          }>
          {/* {props.bookMark ? (
            <i className="bi bi-bookmark-check"></i>
            ) : (
            <i className="bi bi-bookmark"></i>
          )} */}
        </button>
      </td>

      <td>
        <button
          onClick={() => props.handleDelete(props.user._id)}
          className='btn btn-danger'>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
