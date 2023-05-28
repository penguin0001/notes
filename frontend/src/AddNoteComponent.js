import React, { useState } from 'react';

const AddNoteComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new note object
    const newNote = {
      title: title,
      content: content,
    };

    // Send the new note to the Django API
    fetch('http://localhost:8000/notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API if needed
        console.log('Note created successfully:', data);
        // Reset the form
        setTitle('');
        setContent('');
        // update UI
        window.location.reload(true);
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Create Note</button>
    </form>
  );
};

export default AddNoteComponent;
