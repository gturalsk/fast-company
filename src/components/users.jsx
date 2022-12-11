import React, { useState } from "react";
import API from "../API";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  //console.log("users ", users);

  const handleDelete = (userId) => {
    console.log(users);
  };
  const renderPhrase = (namber) => {
    console.log("zzzz");
  };
  const nameUsers = users.map((user) => {
    <td>{user.name}</td>;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качество</th>
          <th scope="col">Професия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
        </tr>
      </thead>
      <tbody>
        {users.map((name) => (
          // <div>{name.name}</div>
          <tr>
            <td>{name.name}</td>
            <td>{name.qualities.fetchAll()}</td>
            <td>@{name.name}</td>
            <td>@{name.name}</td>
            <td>@{name.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
