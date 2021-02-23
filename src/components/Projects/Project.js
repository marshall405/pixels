import React from 'react'

import './projects.css'
export default function Project( {project, setProjectId, active}) {
    return (
        <div onClick={() => setProjectId(project._id)} className={`project ${active ? 'active' : null}`}>
            <i class={`fab fa-buromobelexperte ${active ? 'rotate' : null }`}></i>
            <h4> {project.name} </h4> 
        </div>
    )
}
