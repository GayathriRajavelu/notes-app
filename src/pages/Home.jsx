import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

export default function Home() {
  const { notes, moveToTrash, toggleArchive, togglePin } = useContext(NotesContext);

  const pinned = notes.filter((n) => n.pinned);
  const others = notes.filter((n) => !n.pinned);

  return (
    <div className="p-6 space-y-8">
      {/* 📌 Pinned Section */}
      {pinned.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">📌 Pinned</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {pinned.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onTrash={moveToTrash}
                onArchive={toggleArchive}
                onPin={togglePin}
              />
            ))}
          </div>
        </div>
      )}

      {/* 📝 Other Notes */}
      <div>
        {others.length > 0 && <h2 className="text-lg font-semibold mb-3">Notes</h2>}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {others.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onTrash={moveToTrash}
              onArchive={toggleArchive}
              onPin={togglePin}
            />
          ))}
        </div>

        {pinned.length === 0 && others.length === 0 && (
          <p className="text-center text-gray-600 mt-10">No notes yet.</p>
        )}
      </div>
    </div>
  );
}
