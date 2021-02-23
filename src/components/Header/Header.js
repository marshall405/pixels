import React from 'react'

import './header.css'

export default function Header(props) {
    return (
        <header>
            <h3> {props.name} </h3>
            <button onClick={() => props.newProject(true)}><i className="fas fa-plus"></i> New Project </button>
        </header>
    )
}
