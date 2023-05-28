import React from 'react';

const NoteComponent = ({ note }) => {
  return (
    <div className="Note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteComponent;
