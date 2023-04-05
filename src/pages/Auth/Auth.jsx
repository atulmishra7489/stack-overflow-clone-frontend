import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'
const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert('Enter email and password')
        }
        if (isSignup) {
            if (!name) {
                alert("Enter a name to continue")
            }
            dispatch(signup({ name, email, password }, navigate))
        } else {
            dispatch(login({ email, password }, navigate))
        }
        console.log(name, email, password);
    }

    return (
        <div className='auth-section'>
            {isSignup && <AboutAuth />}
            <div className='auth-container-2'>
                <div className="flex--item">
                    <div className="logo-item">
                        {!isSignup && <a href="/"><img src={icon} alt='stack overflow' className='login-logo' /></a>}
                    </div>
                    <div className="formcontainer">
                        <form onSubmit={handleSubmit} id='login-form'>
                            {
                                isSignup && (
                                    <label htmlFor='name'>
                                        <h4>Display Name</h4>
                                        <input type="text" id='name' name='name' onChange={(e) => { setName(e.target.value) }} />
                                    </label>
                                )
                            }
                            <div className='d-flex gs12 '>
                                <label className='s-label' htmlFor="email">
                                    Email
                                </label>
                                <div className='div-inp'>
                                    <input className='s-input2' type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className='d-flex fd-col '>
                                <div className=" d-flex-new">
                                    <label className='s-label' htmlFor="password">
                                        Password
                                    </label>
                                    {!isSignup && <a  className=' s-link' href='#' style={{ color: "#007ac6", fontSize: '13px' }}>forgot password?</a>}
                                </div>
                                <div className='div-inp'>
                                    <input className='s-input2' type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
                                    {isSignup && <p style={{ color: "#666767", fontSize: "13px" }}>Passwords must contain at least eight<br />characters, including at least 1 letter and 1<br /> number.</p>}
                                </div>
                            </div>
                            {
                                isSignup && (
                                    <label htmlFor='check'>
                                        <input type="checkbox" id='check' />
                                        <p style={{ fontSize: "13px" }}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                                    </label>
                                )
                            }
                            <div className="d-flex submit-btn">
                            <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
                            </div>
                            {
                                isSignup && (
                                    <p style={{ color: "#666767", fontSize: "13px" }}>
                                        By clicking “Sign up”, you agree to our
                                        <span style={{ color: "#007ac6" }}> terms of<br /> service</span>,
                                        <span style={{ color: "#007ac6" }}> privacy policy</span> and
                                        <span style={{ color: "#007ac6" }}> cookie policy</span>
                                    </p>
                                )
                            }
                        </form>
                    </div>
                    {/* <div className='foot'>
                        {isSignup ? 'Already have an account?' : "Don't have an account?"}
                        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in" : 'sign up'}</button>
                    </div> */}
                    <div className="lastone">
                            Don't have an account?
                            <a href="/SignupUser" name="login"> Sign up</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
