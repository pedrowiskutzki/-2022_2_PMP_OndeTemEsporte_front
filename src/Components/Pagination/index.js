import React from "react";
import { ItemActive, List, PaginationList, ButtonPA } from "./styled";

const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const MAX_RIGHT = (MAX_ITEMS + 1) / 2;

export const Pagination = ({ setPage, pageNumber, totalPages }) => {
  const current = pageNumber + 1;
  const [first, setFirst] = React.useState(1);
  const [final, setFinally] = React.useState(2);

  React.useEffect(() => {
    setFirst(Math.floor(current - MAX_LEFT));
    setFinally(Math.floor(current + MAX_RIGHT));
  }, [current]);

  if (first < 1) {
    setFirst(1);
    setFinally(MAX_ITEMS);
  }

  if (totalPages > MAX_ITEMS) {
    if (final > totalPages) {
      setFirst(totalPages - (MAX_ITEMS - 1));
      setFinally(totalPages);
      if (first < 1) setFirst(1);
    }
  }

  function onPageChange(page) {
    setPage(page - 1);
  }

  return (
    <PaginationList>
      <li>
        <ButtonPA

          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Anterior
        </ButtonPA>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
        .map((_, index) => index + first)
        .map((page) => {
          return (
            <List key={page}>
              {page === current ? (
                <ItemActive  onClick={() => onPageChange(page)}>
                  {page}
                </ItemActive>
              ) : (
                <button

                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              )}
            </List>
          );
        })}
      <li>
        <ButtonPA
          className="btn"
          onClick={() => onPageChange(current + 1)}
          disabled={current === totalPages}
          style={{ marginLeft: 16 }}
        >
          Próxima
        </ButtonPA>
      </li>
    </PaginationList>
  );
};