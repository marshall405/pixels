import React, {useState} from 'react'
import axios from 'axios'

import {API_BASE_URL} from '../../constants/apiConstants'

export default function SignUp(props) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    function handleSubmit(e) {
        e.preventDefault()
        const first_name = e.target.first_name.value
        const last_name = e.target.last_name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const repeat_password = e.target.repeat_password.value

        if(password !== repeat_password) {
            setError("Passwords must match!")
        }else if(password.length < 8){
            setError("Password must be 8 or more characters!")
        } else {
            setLoading(true)
            axios.post(API_BASE_URL + '/signup', {
                first_name, last_name, email, password
            })
            .then(res => {
                if(res.data.error) {
                    setError(res.data.error)
                    setLoading(false)
                } else {
                    props.login(res.data.user)                    
                    localStorage.setItem('token', res.data.jwt)
                }
            })
        }
    }

    return (
        <>
            <h2> Create your account </h2>
            { error && <p className="error"> {error} </p> }
            <div className={loading ? 'loader' : null}></div>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="first_name"> First Name </label>
                <input type="text" name="first_name" placeholder="" required/>
                <label htmlFor="last_name"> Last Name </label>
                <input type="text" name="last_name" placeholder="" required/>
                <label htmlFor="email"> Email </label>
                <input type="email" name="email" placeholder="" required/>
                <label htmlFor="password"> Password </label>
                <input type="password" name="password" placeholder="" required/>
                <label htmlFor="repeat_password"> Repeat Password </label>
                <input type="password" name="repeat_password" placeholder="" required/>
                <button type="submit"> Sign Up </button>
            </form>
        </>
    )
}
