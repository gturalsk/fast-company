import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    return (
        <thead>
            <tr className="line">
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].item)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                    </th>
                ))}
                {/* <th scope="col">Качество</th>
                <th onClick={() => hendleSort("profession.name")} scope="col">
                    Професия
                </th>
                <th onClick={() => hendleSort("completedMeetings")} scope="col">
                    Встретился, раз
                </th>
                <th onClick={() => hendleSort("rate")} scope="col">
                    Оценка
                </th>
                <th onClick={() => hendleSort("bookmark")} scope="col">
                    Избранное
                </th> */}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
