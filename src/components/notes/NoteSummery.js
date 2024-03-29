import React from 'react'

const NoteSummery = ({ note }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{note.title}</span>
                <p>Posted by User</p>
                <p className="grey-text">19 October, 5pm</p>
            </div>
        </div>
    )
}

export default NoteSummery
