import React from "react";
import Books from "../books/Books";
import FilterBook from "../filter/FilterBook";

export default function Home() {
  return (
    <>
      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          {/* filter books */}
          <FilterBook />

          {/* book list */}
          <Books />
        </div>
      </main>
    </>
  );
}
