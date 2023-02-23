import React, { useState, useEffect } from "react";
import API from "../API";
import "../../index.css";
import User from "./user";
import SearchStatus from "./searchStatus";
import Pagination from "./pagination";
import GroupList from "./groupList";
// import "../API/utils/paginate";
import { paginate } from "../API/utils/paginate";
import { noConflict } from "lodash"; // не пойму как найти ошибку здесь!!!
const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const handleDelete = (userId) => {
        const usersFiltered = users.filter((user) => user._id !== userId);
        setUsers(usersFiltered);
    };

    const handlProfessionSelect = (item) => {
        setSelectedProf(item);
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

    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const hanglePageChenge = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession === selectedProf)
        : users;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <>
            <SearchStatus
                usersLenght={count}
                phrase={getPhrase()}
                classes={getBageClasses()}
            />
            {professions && (
                <>
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
                </>
            )}

            {!!count && (
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
                        {userCrop.map((user) => (
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

            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChenge={hanglePageChenge}
                currentPage={currentPage}
            />
        </>
    );
};

export default Users;
