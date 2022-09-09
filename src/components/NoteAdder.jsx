import React from 'react'
import { useState } from 'react';

const NoteAdder = ({ handleNoteAdd }) => {

  const [noteText, setNoteText] = useState("");

  return (
    <div className='flex flex-col justify-between bg-green-600 rounded-2xl p-4 min-h-[200px]'>

      <textarea className="flex outline-none resize-none rounded-lg bg-green-300 placeholder-black "
        placeholder='Type the note here...' maxLength="256" value={noteText}
        onChange={(event) => { setNoteText(event.target.value); }}
        >
      </textarea>

      <button className='flex flex-column hover:bg-slate-300 bg-slate-200 items-center rounded-lg p-2 px-4 my-2 m-auto'
        onClick={() => {
          if (noteText.trim().length > 0) {
            handleNoteAdd(noteText); setNoteText("")
          }
        }}
        >
        Save
      </button>

    </div >
  )
}

export default NoteAdder

