import React from 'react';
import NotesComponent from './NotesComponent';
import AddNoteComponent from './AddNoteComponent';

const App = () => {
  return (
    <div>
      <h1>Notes</h1>
      <AddNoteComponent />
      <NotesComponent />
    </div>
  );
};

export default App;
