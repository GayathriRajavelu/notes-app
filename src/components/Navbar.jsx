import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";

export default function Navbar() {
  const { setSearch } = useContext(NotesContext);
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <Link to="/" className="font-bold text-xl">📝 NotesApp</Link>
      {location.pathname === "/" && (
        <input
          type="text"
          placeholder="Search notes..."
          className="rounded-lg px-3 py-1 text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      <div className="flex gap-3 items-center">
        <Link to="/add" className="hover:underline">+ Add</Link>
        <Link to="/archive" className="hover:underline">Archive</Link>
        <Link to="/trash" className="hover:underline">Trash</Link>
      </div>
    </nav>
  );
}
