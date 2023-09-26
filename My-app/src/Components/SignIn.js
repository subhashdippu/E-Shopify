import React, { useReducer, useState } from 'react'
import { NavLink, useHistory, Link } from 'react-router-dom'
import '../Css/SignIn.css'
import Image from '../ImageAndVedio/E-Shopify.png'
const SignIn = () => {

    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const refresh = () => window.location.reload(true)
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid Credintials")
        }
        else {
            window.alert("Login Succeful")
            history.push("/")
            refresh() // this is for refreshing the page
        }
    }
    // 
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src={Image}
                />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <button onClick={loginUser} type="submit" className="login_signInButton">
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.
                </p>
                <button className="login_registerButton">
                    <NavLink to="/registration" className='imge-link'>Create an Account</NavLink>
                </button>
            </div>
        </div>
    )
}

export default SignIn