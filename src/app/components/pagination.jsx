import React from "react";
import { range } from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChenge, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? "  active" : "")
                        }
                        key={"page_" + page}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChenge(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChenge: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
