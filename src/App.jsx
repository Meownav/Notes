import React from 'react';
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Main from './components/Main';

const App = () => {
  const [note, setNote] = useState([
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNote([...note, newNote]);
  }

  const delNote = (id) => {
    const newNote = note.filter((note) => note.id !== id);
    setNote(newNote);
  }

  const [searchText, setSearchText] = useState("");

  return (
    <div className='App bg-rose-300 mx-auto px-10'>
      <Header />
      <SearchBar handleSearch={setSearchText} />
      <Main handleNoteAdd={addNote}
        notes={note.filter((x) => x.text.toLowerCase().includes(searchText))} handleDelNote={delNote} />
    </div>
  )
}

export default App
