// import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import React, { useState, useEffect } from 'react'


function Payment({ cartItems }) {

  const [userData, serUserData] = useState({})
  const callAboutPage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json()
      console.log(data)
      serUserData(data)
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
  return (
    <Container>


      <Main>
        <ReviewContainer>
          <h1>Review Your Order</h1>
          <hr />
          <AddressContainer>
            <h3>Shipping Address</h3>

            <div>
              <p>Subhash Prasad</p>
              <p>{userData.email}</p>
              <p>2345678934</p>
              <p>6556gucds</p>
              <p>Khan Pur</p>
              <h1>{userData.messages}</h1>
              {/* {userData.messages.name} */}

              {/* <h1>{userData.name}</h1>
              // <h1>{userData.email}</h1>
              <h1>{userData.messages}</h1> */}
              <p>New delhi</p>
              <p>Pandchvati</p>
              <p>Delhi</p>
            </div>
          </AddressContainer>

          <PaymentContainer>
            <h3>Payment Method</h3>

            <div>
              <p>Card Details</p>

              {/* Card Element */}


            </div>
          </PaymentContainer>

          <OrderContainer>
            {/* <CartItem /> */}
            <h5>Your Order</h5>
          </OrderContainer>
        </ReviewContainer>
        <Subtotal>
          <h1>
            SubTotal(4): ${69999}
          </h1>
          <Link to='/orderPlaced'>

            <button type="submit"><h3>Place Order</h3></button>
          </Link>
        </Subtotal>
      </Main>
    </Container>
  )
}

export default Payment


const Container = styled.div`
  width: 100%;

  max-width: 1400px;
  background-color: rgb(234, 237, 237);
`;

const Main = styled.div`
  padding: 15px;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewContainer = styled.div`
  background-color: #fff;
  flex: 0.7;
  padding: 15px;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 10px;
    margin-left: 10px;

    p {
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;

const PaymentContainer = styled.div`
  margin-top: 15px;

  div {
    margin-top: 15px;
    margin-left: 15px;

    p {
      font-size: 14px;
    }
  }
`;

const OrderContainer = styled.div`
  margin-top: 30px;
`;

const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 100%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
  }
`
const ItemsContainer = styled.div``
