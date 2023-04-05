import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './SignupUser.css'
import { signup } from '../../actions/auth'

const SignupUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert('Enter email and password')
        }
        if (!name) {
            alert("Enter a name to continue")
        }
        dispatch(signup({ name, email, password }, navigate))
        console.log(name, email, password);
    }

    return (
        <div className="itscontainer">
            <div id="itscontent">
                <div className="itscontentitem">
                    <div className="leftcontent">
                        <h1 class="fs-headline1">Join the Stack Overflow community</h1>
                        <div class="flex--items">Get unstuck — ask a question</div>
                        <div class="flex--items">Unlock new privileges like voting and commenting</div>
                        <div class="flex--items">Save your favorite tags, filters, and jobs</div>
                        <div class="flex--items">Earn reputation and badges</div>
                        <div class="fs-body1">
                            Collaborate and share knowledge with a private group for FREE.
                            <br />
                            <a href="/" target="_blank">Get Stack Overflow for Teams free for up to 50 users.</a>
                        </div>
                    </div>
                    <div className="rightcontent">
                        <div class="d-block">
                            Create your Stack Overflow account. It’s free and only takes a minute.
                        </div>
                        <div id="itsformcontainer">
                            <form onSubmit={handleSubmit} action="" id="itslogin-form">
                                <div className="form-item">
                                    <label class="s-labels" for="display-name">Display name</label>
                                    <div class="form-inp">
                                        <input class="s-input2" type="text" name="name" id="display-name" data-is-teams="false" onChange={(e) => { setName(e.target.value) }}></input>
                                    </div>
                                </div>
                                <div className="form-item">
                                    <label class="s-labels" for="email">Email</label>
                                    <div class="form-inp">
                                        <input class="s-input2" id="email" type="email" size="30" maxlength="100" name="email" pb-role="username" onChange={(e) => { setEmail(e.target.value) }}></input>
                                    </div>
                                </div>
                                <div className="form-item col-rev">
                                    <p class="fs-caption">
                                        Passwords must contain at least eight characters, including at least 1 letter and 1 number.
                                    </p>
                                    <div class="form-inp">
                                        <input class="s-input2" type="password" autocomplete="off" name="password" id="password" pb-role="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                                    </div>
                                    <div class=".form-inp jc-space-between">
                                        <label class="s-labels" for="password">Password</label>

                                    </div>
                                </div>
                                <div className="check-item">
                                    <div className="check-item1">
                                        <input type="checkbox" name="EmailOptIn" id="opt-in" class="s-checkbox" data-ga-action="Email Opt-In"></input>
                                    </div>
                                    <div className="check-item2">
                                        <label for="opt-in" class="s-label2">
                                            Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.
                                        </label>
                                    </div>
                                </div>
                                <div className="form-item">
                                    <button class=" s-btns " id="submit-button" name="submit-button">Sign up</button>
                                </div>
                            </form>
                            <div className="itsbottompart">
                                By clicking “Sign up”, you agree to our
                                <a href="#" name="tos" target="_blank" class="-link">terms of service</a>,
                                <a href="#" name="privacy" target="_blank" class="-link">privacy policy</a> and
                                <a href="#" name="cookie" target="_blank" class="-link">cookie policy</a>
                                <input type="hidden" name="legalLinksShown" value="1"></input>
                            </div>
                        </div>
                        <div className="lastone">
                            Already have an account?
                            <a href="/Auth" name="login"> Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupUser