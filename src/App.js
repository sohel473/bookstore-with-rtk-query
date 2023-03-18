import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import AddBook from "./components/pages/AddBook";
import EditBook from "./components/pages/EditBook";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/books" replace />} />
          <Route path="/books/" element={<Home />} />
          <Route path="/addNewBook/" element={<AddBook />} />
          <Route path="/editBook/:bookId" element={<EditBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
