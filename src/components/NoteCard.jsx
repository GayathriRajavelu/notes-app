import React from "react";
import { Link } from "react-router-dom";

export default function NoteCard({ note, onDelete }) {
  return (
    <div className="p-4 rounded-xl shadow-md" style={{ backgroundColor: note.color }}>
      <h2 className="text-lg font-semibold">{note.title}</h2>
      <p className="text-sm text-gray-800 mt-1">{note.content.slice(0, 100)}...</p>
      <p className="text-xs text-gray-600 mt-2">{note.date}</p>
      <div className="flex justify-end gap-2 mt-3">
        <Link to={`/edit/${note.id}`} className="text-blue-700 hover:underline">Edit</Link>
        <button onClick={() => onDelete(note.id)} className="text-red-700 hover:underline">Delete</button>
      </div>
    </div>
  );
}
