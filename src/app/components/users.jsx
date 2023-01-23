import React, { useState } from "react";
import API from "../API";
import "../../index.css";
import User from "./user";
import SearchStatus from "./searchStatus";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((p) => p._id !== userId));
    renderPhrase(number - 1);
  };
  /////////////////////////////////////////////////////////////////////

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handlBookMark = (userId) => {
    console.log(userId);
    setIsBookmarked(!isBookmarked);
  };
  //console.log(isBookmarked);
  // const handBookMark = () => {
  //   console.log("нажал инзбранное");
  // };
  /////////////////////////////////////////////////////////////////////////////////

  const [phrases, setPhrases] = useState("человек тусанёт с тобой сегодня");

  const ph = [
    "человек тусанёт с тобой сегодня",
    "человека тусанёт с тобой сегодня",
    "Никто с тобой не тусанёт",
  ];

  let number = users.length;
  let phrase = phrases;

  const renderPhrase = (number) => {
    //console.log(number);
    if (number === 1 || number > 4) {
      phrase = setPhrases(ph[0]);
    }
    if (number < 5 && number > 1) {
      phrase = setPhrases(ph[1]);
    }
    if (number === 0) {
      phrase = setPhrases(ph[2]);
    }
  };

  const getBageClasses = (number) => {
    let classes = number > 0 ? "badge text-bg-primary" : "badge text-bg-danger";
    return classes;
  };

  if (number === 0) {
    return (
      <SearchStatus number={number} phrase={phrase} calasses={getBageClasses} />
    );
  }

  ////////////////////////////////////////////////////////

  return (
    <>
      <SearchStatus number={number} phrase={phrase} calasses={getBageClasses} />

      <table className="table">
        <thead>
          <tr className="line">
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Професия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <User
              user={user}
              handleDelete={handleDelete}
              key={user._id}
              bookMark={handlBookMark}
              isBookmarked={isBookmarked}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
