import React, {useState} from 'react'

import './menu.css'

import Projects from '../Projects/Projects'
import Colors from '../Colors/Colors'
import Signout from '../Signout/Signout'
export default function Menu(props) {
    return (
        <aside className="menu-left-side">
            <Projects projects={props.projects} currentProject={props.currentProject} setProjectId={props.setProjectId}/>
            <Colors setColor={props.setColor} />
            { !props.saved && <button onClick={() => props.save(true)}> Save </button> }

            <div className="signout-container">
                <Signout />
            </div>
        </aside>
    )
}
