import React, {useState} from 'react'

import SignIn from './SignIn'
import SignUp from './SignUp'

import './login.css'

export default function Login(props) {
    const [newUser, setNewUser] = useState(false)
    
    return (
        <div className="login-container">
            {
                newUser ? 
                    <div className="container">
                        <SignUp login={props.setUser}/> 
                        <p> Have an account? <span className="button" onClick={() => setNewUser(false)}> Log in now </span></p>
                    </div>
                    :
                    <div className="container">
                        <SignIn login={props.setUser}/>
                        <p> Don't have an account? <span className="button" onClick={() => setNewUser(true)}> Sign Up </span></p>
                    </div>
            }
            
        </div>
    )
}
