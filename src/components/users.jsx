import React, { useState, useTransition } from "react";
import API from "../API";
import "../index.css";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const [phrases, setPhrases] = useState("человек тусанёт с тобой сегодня");

  //console.log(phrase);

  const ph = [
    "человек тусанёт с тобой сегодня",
    "человека тусанёт с тобой сегодня",
    "Никто с тобой не тусанёт",
  ];

  let number = users.length;
  let phrase = phrases;

  const handleDelete = (userId) => {
    setUsers(users.filter((p) => p._id !== userId));
    renderPhrase(number - 1);
  };

  const renderPhrase = (number) => {
    //console.log(number);
    if (number == 1 || number > 4) {
      phrase = setPhrases(ph[0]);
    }
    if (number < 5 && number > 1) {
      phrase = setPhrases(ph[1]);
    }
    if (number == 0) {
      phrase = setPhrases(ph[2]);
    }
  };

  const getBageClasses = (number) => {
    //console.log(number);
    let classes = number > 0 ? "badge text-bg-primary" : "badge text-bg-danger";
    return classes;
  };

  if (number == 0) {
    return (
      <div className={getBageClasses(number)}>
        <h5>{`${phrase}`}</h5>
      </div>
    );
  }

  return (
    <>
      <div className={getBageClasses(number)}>
        <h5>{`${number} ${phrase}`}</h5>
      </div>

      <table className="table">
        <thead>
          <tr className="line">
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Професия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((qualiti) => {
                  return (
                    <div
                      className={`badge bg-${qualiti.color}`}
                      id="qualiti"
                      key={qualiti._id}
                    >
                      {qualiti.name}
                    </div>
                  );
                })}
              </td>

              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
