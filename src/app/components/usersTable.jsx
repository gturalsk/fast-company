import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UserTable = ({ users, handleDelete, handlBookMark, onSort }) => {
    return (
        <table className="table">
            <thead>
                <tr className="line">
                    <th onClick={() => onSort("name")} scope="col">
                        Имя
                    </th>
                    <th scope="col">Качество</th>
                    <th onClick={() => onSort("profession.name")} scope="col">
                        Професия
                    </th>
                    <th onClick={() => onSort("completedMeetings")} scope="col">
                        Встретился, раз
                    </th>
                    <th onClick={() => onSort("rate")} scope="col">
                        Оценка
                    </th>
                    <th onClick={() => onSort("bookmark")} scope="col">
                        Избранное
                    </th>
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
    handlBookMark: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired
};

export default UserTable;
