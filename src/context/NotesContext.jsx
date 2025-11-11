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
      pinned: false,
      archived: false,
      trashed: false,
      date: new Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, title, content, color) => {
    setNotes(
      notes.map((n) =>
        n.id === id ? { ...n, title, content, color, date: new Date().toLocaleString() } : n
      )
    );
  };

  const moveToTrash = (id) => setNotes(notes.map((n) => (n.id === id ? { ...n, trashed: true } : n)));
  const restoreNote = (id) => setNotes(notes.map((n) => (n.id === id ? { ...n, trashed: false } : n)));
  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));
  const toggleArchive = (id) => setNotes(notes.map((n) => (n.id === id ? { ...n, archived: !n.archived } : n)));
  const togglePin = (id) => setNotes(notes.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n)));

  // ✅ FILTER NOTES (exclude trashed + archived) + SORT (pinned first)
  const filteredNotes = notes
    .filter(
      (n) =>
        !n.trashed &&
        !n.archived &&
        (n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => (b.pinned === a.pinned ? 0 : b.pinned ? 1 : -1));

  const archivedNotes = notes.filter((n) => n.archived && !n.trashed);
  const trashedNotes = notes.filter((n) => n.trashed);

  return (
    <NotesContext.Provider
      value={{
        notes: filteredNotes,
        archivedNotes,
        trashedNotes,
        addNote,
        updateNote,
        moveToTrash,
        restoreNote,
        deleteNote,
        toggleArchive,
        togglePin,
        setSearch,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
