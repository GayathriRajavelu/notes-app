import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";

export default function Navbar() {
  const { setSearch } = useContext(NotesContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <Link to="/" className="font-bold text-xl">📝 NotesApp</Link>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search notes..."
          className="rounded-lg px-3 py-1 text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/add" className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-gray-100">
          + Add
        </Link>
      </div>
    </nav>
  );
}
