import React from "react";
import { Link } from "react-router-dom";

export default function NoteCard({ note, onTrash, onArchive, onPin }) {
  return (
    <div className="p-4 rounded-xl shadow-md relative" style={{ backgroundColor: note.color }}>
      <button
        onClick={() => onPin(note.id)}
        className={`absolute top-2 right-2 text-xl ${note.pinned ? "text-yellow-500" : "text-gray-400"} hover:scale-110`}
      >
        📌
      </button>

      <h2 className="text-lg font-semibold">{note.title}</h2>
      <p className="text-sm text-gray-800 mt-1">{note.content.slice(0, 100)}...</p>
      <p className="text-xs text-gray-600 mt-2">{note.date}</p>

      <div className="flex justify-end gap-3 mt-3 text-sm">
        <Link to={`/edit/${note.id}`} className="text-blue-700 hover:underline">
          Edit
        </Link>
        <button onClick={() => onArchive(note.id)} className="text-green-700 hover:underline">
          {note.archived ? "Unarchive" : "Archive"}
        </button>
        <button onClick={() => onTrash(note.id)} className="text-red-700 hover:underline">
          Trash
        </button>
      </div>
    </div>
  );
}
