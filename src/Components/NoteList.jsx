import axios from "axios";
import Note from "./Note";
import { useEffect } from "react";

function NoteList({ notes, setNotes, toggleImportanceOf }) {
  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [setNotes]);

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          toggleImportanceOf={toggleImportanceOf}
        />
      ))}
    </ul>
  );
}

export default NoteList;
