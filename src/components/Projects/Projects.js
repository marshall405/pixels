import React, {useState} from 'react'

import Project from './Project'

export default function Projects(props) {
    return (
        <div className="projects-container">
            <h2> Projects </h2>
            { props.projects.map( project => <Project active={props.currentProject === project._id ? true : false} key={project._id} project={project} setProjectId={props.setProjectId}/>) }
        </div>
    )
}
