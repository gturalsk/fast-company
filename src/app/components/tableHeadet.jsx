import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    console.log(selectedSort);
    const hendleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => hendleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {columns[column].sort &&
                            columns[column].path === selectedSort.path && (
                                <i
                                    className={
                                        "bi bi-caret" +
                                        (selectedSort.order === "asc"
                                            ? "-down-"
                                            : "-up-") +
                                        "fill"
                                    }
                                />
                            )}
                    </th>
                ))}

                {/* <th scope="col">Качества</th>
                <th onClick={() => hendleSort("professions.name")} scope="col">
                    Профессия
                </th>
                <th onClick={() => hendleSort("completedMeetings")} scope="col">
                    Встретился, раз
                </th>
                <th onClick={() => hendleSort("rate")} scope="col">
                    Оценка
                </th>
                <th onClick={() => hendleSort("bookmark")} scope="col">
                    Избранное
                </th>
                <th /> */}
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
