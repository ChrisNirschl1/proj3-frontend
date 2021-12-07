import React from 'react'
import "./style.css"

export default function SignupForm(props) {
    return (
        <>
                <form onSubmit={props.submit} className="LoginForm">
                    <input onChange={props.change} name="email" value={props.loginState.email} placeholder="email" />
                    <input onChange={props.change} name="password" value={props.loginState.password} type="password" placeholder="password" />
                    <button>Submit</button>
                </form>

                <form onSubmit={props.signSubmit} className="SignupForm">
                    <input onChange={props.signChange} name="email" value={props.signupState.email} placeholder="email" />
                    <input onChange={props.signChange} name="password" value={props.signupState.password} type="password" placeholder="password" />
                    <button>Signup</button>
                </form>
        </>


    )
}