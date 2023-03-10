import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UserTable = ({ users, handleDelete, handlBookMark }) => {
    return (
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
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handlBookMark: PropTypes.func.isRequired
};

export default UserTable;
