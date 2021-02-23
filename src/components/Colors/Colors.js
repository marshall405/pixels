import React from 'react'

import './colors.css'
export default function Colors(props) {

    function handleKeyEvent(e) {
        props.setColor(e.target.value)
    }

    return (
        <div id="settings" className="colors-container">
            <label htmlFor="color"> Color </label>
            <input name="color" type="text" placeholder="black..." onChange={handleKeyEvent}></input>
        </div>
    )
}
