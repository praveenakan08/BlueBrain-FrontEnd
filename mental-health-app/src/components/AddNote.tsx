import { useState } from "react";

interface AddNoteProps {
    handleNewNote: (noteContent: string) => void;
}

const AddNote = ({handleNewNote}: AddNoteProps): JSX.Element => {
    const [noteContent, setNoteContent] = useState('');
    const todayDate = new Date().toLocaleDateString();
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteContent(event.target.value);
    }

    const handleSaveClick = () => { 
        if(noteContent.trim().length > 0) {
            handleNewNote(noteContent);   
            setNoteContent('');     
        }   
    }

    return (
        <div className="note bg-green-300 shadow-lg">
            <textarea 
                className="focus:outline-none resize-none bg-green-300" 
                rows={8} cols={10} 
                placeholder="What's on your mind today?"
                value={noteContent}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>{todayDate}</small>
                <button className="btn cursor:pointer hover:bg-gray-300"
                        onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;
