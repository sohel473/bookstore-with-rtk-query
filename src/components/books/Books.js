import React from "react";
import Book from "./Book";

export default function Books() {
  return (
    <>
      <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Book />
      </div>
    </>
  );
}
