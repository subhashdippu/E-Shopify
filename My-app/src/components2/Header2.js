import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Image from '../ImageAndVedio/E-Shopify.png'
import '../Components/Dropdown.css'
import React, { useEffect, useState } from 'react'


function Header({ cartItems, user, signOut }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        });
        return count;
    }


    const [userData, setUserData] = useState('')
    const [show, setShow] = useState(false)
    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },

            })

            const data = await res.json()
            console.log(data)
            setUserData(data)
            setShow(true)

        } catch (err) {
            console.log(err)

        }
    }
    useEffect(() => {
        callAboutPage();
    }, [])
    return (
        <div>
            <Container>
                <HeaderLogo>
                    <Link to="/">
                        <img src={Image} alt=' ' />
                    </Link>
                </HeaderLogo>
                <HeaderOptionAddress>
                    <LocationOnIcon />
                    <HeaderOption>
                        <OptionLineTwo>Select your address</OptionLineTwo>
                    </HeaderOption>
                </HeaderOptionAddress>
                <HeaderSearch>
                    <HeaderSearchContainer><SearchIcon /></HeaderSearchContainer>
                    <HeaderSearchInput type='text' placeholder='Search for Products, brands and more' />
                </HeaderSearch>

                <HeaderNavItem>
                    <SignOption>
                        <HeaderOption >
                            <PersonIcon onClick={handleOpen} />
                        </HeaderOption>
                        <OptionLineOne onClick={handleOpen}>
                            <div className="dropdown">
                                <OptionLineOne >SignIn</OptionLineOne>
                                {open ? (
                                    <ul className="menu">
                                        <li className="menu-item">
                                            <Link to="signin">
                                                <h3>SignIn</h3>
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="registration">
                                                <h3>SignUp</h3>
                                            </Link>
                                        </li>
                                    </ul>
                                ) : null}
                            </div>
                        </OptionLineOne>
                    </SignOption>
                    <HeaderOptionCart>
                        <Link to="/Cart">
                            <ShoppingBasketIcon />
                            <CartCount>{getCount()} Cart</CartCount>
                        </Link>
                    </HeaderOptionCart>
                </HeaderNavItem>
            </Container>
            <Second className="flex bg text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
                <div>Today's Deals</div>
                <div>Customer Service</div>
                <div>Registry</div>
                <div>Gift Cards</div>
                <div>Sell</div>
            </Second>
        </div>
    )
}

export default Header
const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
`
const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
    }
    padding-left: 171px;
`
const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`
const OptionLineOne = styled.div`
    padding-right: 64px;
    // padding-left: 15px;
    padding-top: 7px;
    max-width: 0px;
    cursor:pointer;
`
const OptionLineTwo = styled.div`
    font-weight: 700;  
`
const HeaderSearch = styled.div`
    display:flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden; // It just match the border 
    margin-left: 4px;

`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    outline: none;
 
`
const HeaderSearchContainer = styled.div`
    background-color: white;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const HeaderNavItem = styled.div`
    display: flex;
        padding-right: 135px;
`
const HeaderOption = styled.div`
// TROUBLE
    padding: 10px 9px 10px 9px;
    cursor: pointer;
    display: flex;
    // margin-left: 8px;
    // margin-right:8px;
`
const HeaderOptionCart = styled.div`
    display: flex;
    a{  // This is the link of cart
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
    }
    padding-right:55px;
    // margin-left: 21px;
    // margin-right:15px;
`
const CartCount = styled.div`
    padding-left: 4px;
`
const Second = styled.div`
    background-image: none;
    background-color: #232f3e;
`
const Arrow = styled.select`
    border: none;
    outline: none;
`
const Language = styled.div`
    img{
        max-width:20px;
        margin-left: 21px;
        // margin-right:15px;
        margin-top:20px;
    }
    display:flex;
`
const Lan = styled.select`
    border: none;
    outline: none;
    background-color: #0F1111;
    max-width:40px;
    margin-top:20px;
    // margin-bottom:2px;
    font-weight: 700; 
`
const Sing = styled.select`
    border: none;
    outline: none;
    background-color: #0F1111;
`

const SignOption = styled.div`
    display:flex;
`