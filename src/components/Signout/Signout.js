import React from 'react'

export default function Signout() {
    function signout () {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <button onClick={signout}>
            Sign out
        </button>
    )
}
