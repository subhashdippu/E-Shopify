import React, { useState, useEffect } from 'react'
import Image from '../ImageAndVedio/E-Shopify.png'
import { NavLink, useHistory, Link } from 'react-router-dom';
import '../Css/Registration.css'
const Order = () => {

    const history = useHistory()
    const getlocalItems = () => {
        let datas = localStorage.getItem('data')
        console.log(datas)
        if (datas) {
            return JSON.parse(localStorage.getItem('data'))
        }
        else {
            return []
        }
    }
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", Area: "", flat: "", LandMark: "", Town: "", State: "" }, getlocalItems())
    const callAboutPage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await res.json()
            console.log(data)
            setUserData({ name: data.name, email: data.email, phone: data.phone, Area: data.Area, flat: data.flat, LandMark: data.LandMark, Town: data.Town, State: data.State })
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        callAboutPage();
    }, [])

    const contactForm = async (e) => {
        e.preventDefault()
        const { name, email, phone, Area, flat, LandMark, Town, State } = userData
        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, Area, flat, LandMark, Town, State
            })
        })
        const data = await res.json();
        if (!data) {
            console.log("message not send");
        } else {
            alert("message is send")
            setUserData({ ...userData, Area: "", flat: "", LandMark: "", Town: "", State: "", name: "" })
            history.push('/payment')
        }
    }
    const handleInputes = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }
    const { name, email, phone, Area, flat, LandMark, Town, State } = userData
    useEffect(() => {
        window.localStorage.setItem("data", JSON.stringify(userData));
    }, [userData])
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src={Image} alt=' '
                />
            </Link>
            <div className="login_container">
                <h1>Create Account</h1>
                <form method="POST" >

                    <h5>Full Name</h5>
                    <input type='text' name='name' id='name' autoComplete='off'
                        placeholder='First and last name'
                        value={userData.name}
                        onChange={handleInputes}
                    />


                    <h5>Mobile number</h5>
                    <input type='number' name='phone' id='phone' autoComplete='off'
                        placeholder='Mobile number'
                        value={userData.phone}
                        onChange={handleInputes}
                    />

                    <h5>Flat, House no. building, Company</h5>
                    <input type='text' name='flat' id='email' autoComplete='off'
                        placeholder='Flat, House no. building, Company' onChange={handleInputes}

                    />

                    <h5>Area, Colony, Street</h5>
                    <input type='text' name='Area' id='work' autoComplete='off'
                        placeholder='Area, Colony, Street'
                        onChange={handleInputes}
                    />


                    <h5>LandMark</h5>
                    <input type='text' name='LandMark' id='LandMark' autoComplete='off'
                        placeholder='LandMark' onChange={handleInputes} />
                    <h5>Town/City</h5>
                    <input type='text' name='Town' id='Town' autoComplete='off'
                        placeholder='City' onChange={handleInputes} />

                    <h5>State/Province</h5>
                    <input type='text' name='State' id='State' autoComplete='off'
                        placeholder='State' onChange={handleInputes} />

                    {/* <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p> */}
                    {/* <Link to='/payment' > */}

                    <button type="submit" className="login_signInButton" onClick={contactForm}> {/* */}
                        Deliver to this Address

                    </button>
                    {/* history.push('/SignIn') */}
                    {/* </Link> */}

                </form>


            </div>
        </div>

    )
}

export default Order