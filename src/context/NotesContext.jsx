import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content, color) => {
    const newNote = {
      id: uuidv4(),
      title,
      content,
      color,
      date: new Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, title, content, color) => {
    setNotes(notes.map((n) =>
      n.id === id ? { ...n, title, content, color, date: new Date().toLocaleString() } : n
    ));
  };

  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <NotesContext.Provider value={{ notes: filteredNotes, addNote, updateNote, deleteNote, setSearch }}>
      {children}
    </NotesContext.Provider>
  );
}
