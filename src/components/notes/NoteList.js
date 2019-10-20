import React from 'react'
import NoteSummery from './NoteSummery'

const NoteList = ({ notes }) => {
    return (
        <div className="project-list section">
            {notes && notes.map(note => {
                return (
                    <NoteSummery note={note} key={note.id} />
                )
            })}
        </div>
    )
}

export default NoteList
