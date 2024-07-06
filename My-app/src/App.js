import { useState, useEffect } from 'react'
import './App.css';
import Header from './Components/Header'
import Cart from './Components/Cart'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { db, auth } from './Components/firebase'
import Login from './Components/Login'
import AddProducts from './Components/AddProducts';
import Ac from './Components/Ac'
import { provider } from './Components/firebase'


import Login2 from './components2/Login2'
import Header2 from './components2/Header2'
import Home2 from './components2/Home2'

import { useHistory } from 'react-router-dom'


import OrderPlaced from './Components/OrderPlaced'
import Registration from './Components/Registration';
import Errorpage from './Components/Errorpage';
import SignIn from './Components/SignIn';
import Order from './Components/Order';
import Payment from './Components/Payment';
import SignOut from './Components/SignOut'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))); // It will get the data from local storage of browser Null means no user
  const [cartItems, setCartItems] = useState([])
  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      let newUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }
      localStorage.setItem('user', JSON.stringify(newUser))// only except strings brower storage
      setUser(newUser);
    }).catch((error) => { // if sign is not possible
      alert(error.message);
    })
  }


  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user') // Delete the data form local storage
      setUser(null)
    })
  }
  useEffect(() => {
    getCartItems();
  }, [])


  const [userData, setUserData] = useState('')
  const [show, setShow] = useState(false)
  const history = useHistory()
  const callAboutPage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          // Accept: "appllication/json",
          "Content-Type": "application/json"
        },
        // credentials: "include" // this make sure that our cookies reach to the backend
      })

      const data = await res.json()
      console.log(data)
      setUserData(data.name)
      setShow(true)

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    callAboutPage();
  }, [])



  return (
    < Router >
      {
        !show ? ( //Before SignIn
          <div>
            <Header2 signOut={signOut} user={user} cartItems={cartItems} />
            <Switch>
              <Route path='/login'>
                <Login2 setUser={setUser} />
              </Route>
              <Route path='/payment'>
                <Payment />
              </Route>
              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/ac">
                <Ac />
              </Route>
              <Route path='/signIn'>
                <SignIn setUser={setUser} />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/signout">
                <SignOut />
              </Route>
              <Route path="/">
                <Home signIn={signIn} />
                <AddProducts />
              </Route>
              <Route>
                <Errorpage />
              </Route>
            </Switch>
          </div>
        ) : (
          <div>
            <Header signOut={signOut} show={show} cartItems={cartItems} />
            <Switch>
              <Route path='/login'>
                <Login setUserData={setUserData} />
              </Route>
              <Route path='/payment'>
                <Payment />
              </Route>
              <Route path='/signIn'>
                <SignIn setUser={setUser} />
              </Route>
              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/ac">
                <Ac />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/orderPlaced">
                <OrderPlaced />
              </Route>
              <Route path="/signout">
                <SignOut />
              </Route>
              <Route path="/">
                <Home2 />
                <AddProducts />
              </Route>
            </Switch>
          </div>
        )
      }

    </Router >
  );
}

export default App;
