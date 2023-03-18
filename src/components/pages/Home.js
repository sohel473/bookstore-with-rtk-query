import React from "react";
import Books from "../books/Books";
import FilterBook from "../filter/FilterBook";

export default function Home() {
  return (
    <>
      <main class="py-12 px-6 2xl:px-6 container">
        <div class="order-2 xl:-order-1">
          {/* filter books */}
          <FilterBook />

          {/* book list */}
          <Books />
        </div>
      </main>
    </>
  );
}
