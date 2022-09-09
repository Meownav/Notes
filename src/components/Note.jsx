import React from 'react'

const Note = ({ id, text, date, handleDelNote }) => {
    return (
        <div className="flex flex-col justify-between bg-purple-300 rounded-2xl px-4 py-4 min-h-[200px]" >
            <span>
                {text}
            </span>
            <footer className='flex items-center justify-between' >
                {date}
                <button className='bg-indigo-500 rounded-lg p-2 ' type="button"
                    onClick={() => {handleDelNote(id)}}>
                    Delete
                </button>
            </footer>
        </div>
    )
}

export default Note