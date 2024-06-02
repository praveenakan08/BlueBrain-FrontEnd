import { useState } from "react";
import Note from "../components/Note";
import {nanoid} from "nanoid";
import AddNote from "../components/AddNote";

const MyJournal = (): JSX.Element => {

    // get old notes from api fetch call
    const [notes, setNotes] = useState([{
        id: nanoid(),
        text: "This is my notes",
        date: "12/12/2121"
      },
      {
        id: nanoid(),
        text: "This is my 2 notes",
        date: "12/12/2121"
      }]);

    const handleNewNoteFromParent = (noteContent: string) => {
      const dateToday = new Date();
      const newNote = {
            id: nanoid(),
            text: noteContent,
            date: dateToday.toLocaleDateString()
      }

      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    }

    const handleDeletNoteFromParent = (id: string) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }
    
    return (
        <div className="grid gap-[1rem] grid-cols-auto">  
            {notes?.map((note) => (
                <Note key={note.id} 
                      id={note.id} 
                      text={note.text} 
                      date={note.date}
                      handleDeleteNote={handleDeletNoteFromParent}/>
            ))}
            <AddNote handleNewNote={handleNewNoteFromParent}/>
        </div>
    )
}

export default MyJournal;