import React from 'react'
import NoteSummery from './NoteSummery'
import { Link } from 'react-router-dom'

const NoteList = ({ notes }) => {
    return (
        <div className="project-list section">
            {notes && notes.map(note => {
                return (
                    <Link to={'/note/' + note.id} key={note.id}>
                        <NoteSummery note={note} />
                    </Link>
                )
            })}
        </div>
    )
}

export default NoteList
