import React, { useState, useEffect } from "react";

import API from "../API";
import "../../index.css";

import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
import UserTable from "./usersTable";
// import "../API/utils/paginate";
import { paginate } from "../API/utils/paginate";
import _ from "lodash";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        const usersFiltered = users.filter((user) => user._id !== userId);
        setUsers(usersFiltered);
    };

    const handlProfessionSelect = (item) => {
        // console.log(item);
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handlBookMark = (id) => {
        const newUsers = users.map((user) => {
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
        return users.length > 0
            ? "badge text-bg-primary"
            : "badge text-bg-danger";
    };

    const pageSize = 8;
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const [currentPage, setCurrentPage] = useState(1);

    const hanglePageChenge = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession.name === selectedProf.name) // не происходит сравнение
        : users;

    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);

    const userCrop = paginate(sortedUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handlProfessionSelect}
                        valueProperty="_id"
                        contentProperty="name"
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}

            <div className="d-flex-column">
                <SearchStatus
                    usersLenght={count}
                    phrase={getPhrase()}
                    classes={getBageClasses()}
                />
                {!!count && (
                    <UserTable
                        users={userCrop}
                        handleDelete={handleDelete}
                        handlBookMark={handlBookMark}
                        onSort={handleSort}
                        selectedSort={sortBy}
                    />
                    // Отсюда перенес код в usersTable
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChenge={hanglePageChenge}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Users;
