// import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import image from '../Amazon.jpeg'
// import image1 from '../ImageAndVedio/3.png'
// const Test = () => {

//     const history = useHistory()
//     const [userData, serUserData] = useState({})
//     const callAboutPage = async () => {
//         try {
//             const res = await fetch('/about', {
//                 method: "GET",
//                 headers: {
//                     Accept: "appllication/json",
//                     "Content-Type": "application/json"
//                 },
//                 credentials: "include" // this make sure that our cookies reach to the backend
//             })

//             const data = await res.json()
//             console.log(data)
//             serUserData(data)
//             if (!res.status === 200) {
//                 const error = new Error(res.error)
//                 throw error
//             }
//         } catch (err) {
//             console.log(err)
//             history.push('/SignIn')
//         }
//     }
//     useEffect(() => {
//         callAboutPage();
//     }, [])
//     return (
//         <>
//             <div className='sign-in'>
//                 <div className='container mt-5'>
//                     <div className='signin-content'>
//                         <div className='signin-image'>

//                         </div>
//                         {/* If we create something then use POST method */}
//                         <div method="GET" className='form-group'>
//                             <label htmlFor='email'>
//                                 <i class="zmdi zmdi-assignment-account"></i>
//                             </label>
//                             {/* autoComplete='off' it remove the previous entry, placeholder='Your Name' shows in input */}
//                             <input type='email' name='email' id='email' autoComplete='off'
//                                 placeholder='Your Email' />
//                         </div>
//                         <div className='form-group'>
//                             <label htmlFor='password'>
//                                 <i class="zmdi zmdi-assignment-account"></i>
//                             </label>
//                             {/* autoComplete='off' it remove the previous entry, placeholder='Your Name' shows in input */}
//                             <input type='password' name='password' id='password' autoComplete='off'

//                                 placeholder='Your Password' />
//                         </div>
//                         <div>
//                             <h1>{userData.name}</h1>
//                             <h1>{userData.email}</h1>
//                             <h1>{userData.phone}</h1>
//                             <h1>{userData.work}</h1>
//                             <h1>{userData.password}</h1>
//                             <img src={userData.name === "Subhash" ? image1 : image} alt="Dippu" />
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }
// export default Test






import React, { useState, useEffect } from 'react'
// import Test from './Test'
import { NavLink, Link } from 'react-router-dom';
import '../Css/Registration.css'
const Order = () => {
    const [userData, setUserData] = useState({ name: "", phone: "", email: "" })
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
            setUserData({ ...data, name: data.name, phone: data.phone, email: data.email })
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
        const { name, flat, Area, phone, LandMark, Twon, State } = userData
        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, phone, Area, flat, LandMark, Twon, State
            })
        })
        const data = await res.json();
        if (!data) {
            console.log("message not send");
        } else {
            alert("message is send")
            setUserData({ ...userData, message: "", Area: "", flat: "", LandMark: "", Town: "", State: "" })
        }
    }
    const handleInputes = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>
            <div className="login_container">
                <h1>Create Account</h1>
                <form method="POST" >

                    <h5>Full Name</h5>
                    <input type='text' name='name' id='name' autoComplete='off'
                        placeholder='First and last name'
                        onChange={handleInputes}
                    />


                    <h5>Mobile number</h5>
                    <input type='number' name='phone' id='phone' autoComplete='off'
                        placeholder='Mobile number'
                        onChange={handleInputes}
                    />

                    <h5>Flat, House no. building, Company</h5>
                    <input type='text' name='Flat' id='email' autoComplete='off'
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
                    {/* <Link to='/payment'> */}

                    <button type="submit" className="login_signInButton" onClick={contactForm}> {/* */}
                        Deliver to this Address
                    </button>
                    {/* </Link> */}

                </form>


            </div>
        </div>

    )
}

export default Order









// auth
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/ authenticate')

require('../db/conn');
const User = require("../model/userSchema");
router.get('/', (req, res) => {
    res.send('Hello world form the server router.js')

});




router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Error please the all detail" })
    }
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" })
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password is not maching" })
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword })
            await user.save();
            res.status(201).json({ message: "registrer successful" })
        }
    } catch (err) {
        console.log(err);
    }
})





router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            token = await userLogin.generateAuthToken();
            console.log(token)
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 258920000000),
                HttpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "user password wrong" })
            }
            else {

                res.json({ message: "User Signin Succesful" })
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials" })
        }
    } catch (err) {
        console.log(err)
    }
})




router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser)
})




router.get('/getdata', authenticate, (req, res) => {
    console.log('This is getdata')
    res.send(req.rootUser)
})


router.get('/logout', (req, res) => {
    console.log(`Hello my logout page`)
    res.clearCookie('jwtoken', { path: '/' })
    res.status(200).send('User logout')
})



router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, flat, Area, phone, LandMark, Town, State } = req.body
        if (!name) {
            console.log("error in form")
            return res.json({ error: "please filled the form" })
        }
        const userContact = await User.findOne({ _id: req.userID })
        if (userContact) {
            const userMessage = await userContact.addMessage(name, flat, Area, phone, LandMark, Town, State)
            await userContact.save()
            res.status(201).json({ message: "userContact succsessfully" })
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = router







// user

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    messages: [
        {
            name: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            flat: {
                type: String,
                required: true
            },
            Area: {
                type: String,
            },
            LandMark: {
                type: String,
            },
            Town: {
                type: String,
            },
            State: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})




userSchema.pre('save', async function (next) {
    console.log("This bcrypt")
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})




userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}





userSchema.methods.addMessage = async function (name, flat, Area, phone, LandMark, Town, State) {
    try {
        this.messages = this.messages.concat({ name, flat, Area, phone, LandMark, Town, State })
        await this.save()
        return this.messages
    } catch (error) {
        console.log(error)
    }
}




const User = mongoose.model('USER', userSchema)

module.exports = User; 