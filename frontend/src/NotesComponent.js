import React, { useEffect, useState } from 'react';
import NoteComponent from './NoteComponent';

const NotesComponent = () => {
    // hook time!

    // useState - basic hook to set a state variable we want to use, in this case the notes array
    const [notes, setNotes] = useState([]); 
    
    // useEffect - for syncing component with an 'external system', in this case our API
    // two parameters - setup function, where the logic for connecting to the external system goes, and dependencie
    // use fetch() to get notes array from the API
    // setNotes from useState
    useEffect(() => {
        fetch('http://localhost:8000/notes/')
        .then(response => response.json())
        .then(data => setNotes(data))
        .catch(error => console.error(error));
    }, []); // [] = dependencies, empty means useEffect only runs once when componenet is initiated

    // for updates
    const addNote = (newNote) => {
        setNotes(prevNotes => [...prevNotes, newNote]);
    }
    
    return (
        <div>
            {notes.map(note => (
                <NoteComponent key={note.id} note={note} />
            ))}
        </div>
    );
};

export default NotesComponent;
