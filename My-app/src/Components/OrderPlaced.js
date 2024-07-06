import { Link } from 'react-router-dom';
import React from 'react'
import '../Css/OrderPlaced.css'
function OrderPlaced() {
    return (
        <div className='order_confirm'>
            <h1>Hello Subhash Prasad</h1>
            <h2>Thank you for your order</h2>
            <h3>Your Order Number is : 190fdg3hc56hthf787</h3>
            <h4>Order Total : 3977</h4>
            <Link to="/">
                <button>Continue Shipping</button>
            </Link>
        </div>
    )
}

export default OrderPlaced