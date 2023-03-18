import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../features/filter/filterSlice";

export default function FilterBook() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.filter);

  // console.log(value);

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className={`lws-filter-btn  ${
              value === "All" && "active-filter"
            }`}
            value="All"
            onClick={handleFilter}
          >
            All
          </button>
          <button
            className={`lws-filter-btn  ${
              value === "Featured" && "active-filter"
            }`}
            value="Featured"
            onClick={handleFilter}
          >
            Featured
          </button>
        </div>
      </div>
    </>
  );
}
