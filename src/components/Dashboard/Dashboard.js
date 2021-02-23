import React, {useState} from 'react'

// import components
import Header from '../Header/Header'
import NewProject from '../NewProject/NewProject'
import Menu from '../Menu/Menu'
import Canvas from '../Canvas/Canvas'

import './dashboard.css'

export default function Dashboard( {user} ) {
    const [projectOverlay, setProjectOverlay] = useState(false)
    const [projectId, setProjectId] = useState(null)
    const [color, setColor] = useState('black')
    const [isSaved, setSaved] = useState(true)
    const [saving, setSaving] = useState(false)

    function setProject(project){
        user.projects.push(project)
        setProjectId(project._id)
        setProjectOverlay(false)
        setSaved(true)
        setSaving(false)
    }

    // function save() {
    //     setSaving(true)
    // }

    return (
        <div>
            <Header name={user.first_name} newProject={setProjectOverlay}/>   
            <div className="dashboard-container">
                <div className="menu-container">
                    <Menu saved={isSaved} save={setSaving} projects={user.projects || []} setProjectId={setProjectId} currentProject={projectId} setColor={setColor}/>
                </div>
                <div className="canvas-container">
                    { projectId ? 
                        <Canvas projectId={projectId} color={color} save={saving} saved={isSaved} setSaved={setSaved} setSaving={setSaving}/> 
                        :
                        <div>
                            <h3> Welcome to Pixel Community. </h3>
                            <p> Click on a project or create a new one to get started! </p>
                            <p> Don't forget to save your work! </p>
                        </div>
                        }
                </div>
            </div>

            { projectOverlay && <NewProject isSaved={isSaved} setProject={setProject} setActive={setProjectOverlay} /> }

        </div>
    )
}
