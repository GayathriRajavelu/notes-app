import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

export default function Home() {
  const { notes, deleteNote } = useContext(NotesContext);
  return (
    <div className="p-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {notes.length === 0 ? (
        <p className="text-center text-gray-600 col-span-full">No notes found. Try adding one!</p>
      ) : (
        notes.map((note) => <NoteCard key={note.id} note={note} onDelete={deleteNote} />)
      )}
    </div>
  );
}
