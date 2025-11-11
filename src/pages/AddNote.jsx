import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";

export default function AddNote() {
  const { addNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleAdd = (title, content, color) => {
    addNote(title, content, color);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Note</h1>
      <NoteForm onSubmit={handleAdd} />
    </div>
  );
}
