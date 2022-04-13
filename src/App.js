import React, { useEffect, useState } from "react";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.unshift({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });

    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const idx = tempNotes.findIndex((note) => note.id === id);
    if (idx < 0) return;
    tempNotes.splice(idx, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];
    const idx = tempNotes.findIndex((note) => note.id === id);
    if (idx < 0) return;

    tempNotes[idx].text = text;
    setNotes(tempNotes);
  };

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        deleteNote={deleteNote}
        notes={notes}
        updateText={updateText}
      />
    </div>
  );
};

export default App;
