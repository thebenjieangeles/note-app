import { useState } from "react";
import axios from "axios";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function NoteBook() {
  const [notes, setNotes] = useState([]);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    axios
      .put(`http://localhost:3001/notes/${id}`, changedNote)
      .then((response) =>
        setNotes(notes.map((note) => (note.id !== id ? note : response.data)))
      );
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteList
        notes={notes}
        setNotes={setNotes}
        toggleImportanceOf={toggleImportanceOf}
      />
      <NoteForm notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default NoteBook;
