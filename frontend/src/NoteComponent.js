import React from 'react';

const NoteComponent = ({ note }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteComponent;
