import React from 'react'
import Note from './Note'
import NoteAdder from './NoteAdder'

const Main = ({ handleNoteAdd, notes, handleDelNote }) => {

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,250px))] py-4">
      {
        notes.map(
          (x) => {
            return (<Note id={x.id} text={x.text} date={x.date} handleDelNote = {handleDelNote} />)
          }
        )
      }
      <NoteAdder handleNoteAdd={handleNoteAdd} />
    </div>
  )
}

export default Main