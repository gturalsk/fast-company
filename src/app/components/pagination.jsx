import React from "react";
import _, { range } from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChenge, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  console.log(pages);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item" + (page === currentPage ? "  active" : "")}
            key={"page_" + page}
          >
            <a className="page-link" onClick={() => onPageChenge(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
