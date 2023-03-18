import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Search from "../search/Search";

export default function Navbar() {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img
          src={logo}
          width="150px"
          className="object-contain"
          alt="logo"
        />

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className="font-semibold cursor-pointer"
            to="/books"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link
            className="cursor-pointer"
            to="/addNewBook"
            id="lws-addBook"
          >
            <li>Add Book</li>
          </Link>
        </ul>

        {/* search bar */}
        <Search />
      </div>
    </nav>
  );
}
