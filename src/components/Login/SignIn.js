import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {API_BASE_URL} from '../../constants/apiConstants'

export default function SignIn(props) {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        if(token) {
            axios.post(API_BASE_URL + '/login',{}, { headers: {'Authorization' : `${token}`}} )
                .then( res => {
                    if(res.status === 204) {
                        return 
                    }
                    props.login(res.data.user)
                })
        }
    }, [props])

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        axios.post(API_BASE_URL + '/login', state)
            .then( res => {
                if(res.data.error) {
                    setError(res.data.error)
                    setLoading(false)
                } else {
                    props.login(res.data.user)                    
                    localStorage.setItem('token', res.data.jwt)
                }
            })
    }
    
    function handleChange(e) {
        const {name,value} = e.target
        setState( prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <>
            <h2> Log in to your account </h2>
            {
                error ?
                    <p className="error"> {error} </p>
                    :
                    null
            }
            <div className={loading ? 'loader' : null}></div>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label>
                <input type="email" name="email" placeholder="" required onChange={handleChange}/>
                <label htmlFor="password"> Password </label>
                <input type="password" name="password" placeholder="" required onChange={handleChange}/>
                <button type="submit"> Sign In </button>
            </form>
        </>
    )
}
