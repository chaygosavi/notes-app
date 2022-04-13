import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

const NoteContainer = ({ notes, deleteNote, updateeText }) => {
  return (
    <div className="note-container">
      <h2>NOTES</h2>
      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Note
              updateeText={updateeText}
              deleteNote={deleteNote}
              key={note.id}
              note={note}
            />
          ))
        ) : (
          <h1>NO NOTES AVAILABLE</h1>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
