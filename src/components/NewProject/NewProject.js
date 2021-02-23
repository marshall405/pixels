import React, {useState} from 'react'

import './newproject.css'

import {API_BASE_URL} from '../../constants/apiConstants'

export default function NewProject(props) {
    const [name, setName] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        fetch(API_BASE_URL + '/project', {
            method: 'POST',
            headers: {
                'Authorization' : localStorage.getItem('token'),
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                projectName: name
            })
        })
        .then(res => res.json())
        .then(json => {
            if(json.error) {
                console.log(json.error)
            } else {
                props.setProject(json)
            }
            
        })
    }

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleClick(e) {
        if(e.target.classList.contains('new-project-overlay')){
            e.stopPropagation()
            props.setActive(false)
        }
    }

    return (
        <div className='new-project-overlay' onClick={handleClick}>
            <div>   
                <h2> Create a new project </h2>
                <form method="POST" onSubmit={handleSubmit}>
                    <label htmlFor="project_name"> Project Name </label>
                    <input type="text" name="project_name" placeholder="" value={name} required onChange={handleChange}/>
                    <button type="submit"> Create </button>
                </form>
            </div>
        </div>
    )
}
