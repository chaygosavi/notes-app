import React from "react";
import "./Note.css";

const Note = ({ note, deleteNote }) => {
  const formatDate = (value) => {
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (!value) return;
    const date = new Date(value);
    let hrs = date.getHours();
    let ampm = hrs > 12 ? "PM" : "AM";
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    let mins = date.getMinutes();
    mins = mins < 10 ? "0" + mins : mins;
    let day = date.getDate();
    const month = months[date.getMonth()];

    return `${hrs}:${mins} ${ampm} ${day} ${month}`;
  };

  let timer = 500,
    timeout;

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateeText = (text, id) => {
    debounce(() => {
      updateeText(text, id);
    });
  };

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea
        onChange={(e) => updateeText(e.target.value, note.id)}
        className="note_text"
        defaultValue={note.text}
      />
      <div className="note_footer">
        <p>{formatDate(note.time)}</p>
        <img
          onClick={() => deleteNote(note.id)}
          src="https://img.icons8.com/ios-glyphs/344/delete-forever.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Note;
