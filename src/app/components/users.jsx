import React, { useState } from "react";
import API from "../API";
import "../../index.css";
import User from "./user";
import SearchStatus from "./searchStatus";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    const usersFiltered = users.filter((user) => user._id !== userId);
    setUsers(usersFiltered);
  };

  const handlBookMark = (id) => {
    let newUsers = users.map((user) => {
      //const newUser = { ...user };

      if (user._id === id) {
        user.bookmark = !user.bookmark;

        return user;
      }

      return user;
    });

    return setUsers(newUsers);
  };

  const getPhrase = () => {
    const userLegths = users.length;

    if (userLegths === 1 || userLegths > 4) {
      return "человек тусанёт с тобой сегодня";
    }

    if (userLegths < 5 && userLegths > 1) {
      return "человека тусанёт с тобой сегодня";
    }

    if (userLegths === 0) {
      return "Никто с тобой не тусанёт";
    }
  };

  const getBageClasses = () => {
    return users.length > 0 ? "badge text-bg-primary" : "badge text-bg-danger";
  };

  return (
    <>
      <SearchStatus
        usersLenght={users.length}
        phrase={getPhrase()}
        classes={getBageClasses()}
      />

      {!!users.length && (
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
                onBookMark={handlBookMark}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
