import React from "react";
import PropTypes from "prop-types";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const UserTable = ({
    users,
    handleDelete,
    handlBookMark,
    selectedSort,
    onSort
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: { name: "Качество" },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: { path: "bookmark", name: "Избранное" },
        delete: {}
    };

    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
            {/* <tbody>
                {users.map((user) => (
                    <User
                        user={user}
                        handleDelete={handleDelete}
                        key={user._id}
                        onBookMark={handlBookMark}
                    />
                ))}
            </tbody> */}
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handlBookMark: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default UserTable;
