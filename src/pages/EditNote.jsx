import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";

export default function EditNote() {
  const { id } = useParams();
  const { notes, updateNote } = useContext(NotesContext);
  const navigate = useNavigate();
  const existingNote = notes.find((n) => n.id === id);

  const handleEdit = (title, content, color) => {
    updateNote(id, title, content, color);
    navigate("/");
  };

  if (!existingNote) return <p className="p-6">Note not found.</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
      <NoteForm existingNote={existingNote} onSubmit={handleEdit} />
    </div>
  );
}
