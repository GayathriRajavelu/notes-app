import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export default function Trash() {
  const { trashedNotes, restoreNote, deleteNote } = useContext(NotesContext);

  return (
    <div className="p-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {trashedNotes.length === 0 ? (
        <p className="text-center text-gray-600 col-span-full">Trash is empty.</p>
      ) : (
        trashedNotes.map((note) => (
          <div
            key={note.id}
            className="p-4 rounded-xl shadow-md bg-gray-100 relative"
          >
            <h2 className="text-lg font-semibold">{note.title}</h2>
            <p className="text-sm text-gray-700 mt-1">{note.content.slice(0, 100)}...</p>
            <p className="text-xs text-gray-500 mt-2">{note.date}</p>

            <div className="flex justify-end gap-3 mt-3 text-sm">
              <button onClick={() => restoreNote(note.id)} className="text-green-700 hover:underline">
                Restore
              </button>
              <button onClick={() => deleteNote(note.id)} className="text-red-700 hover:underline">
                Delete Permanently
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
