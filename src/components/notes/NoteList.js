import React from 'react'
import NoteSummery from './NoteSummery'

const NoteList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                return (
                    <NoteSummery project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default NoteList
