import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

const CartItem = ({ id, item }) => {

    const deleteItem = (e) => {// Delete the item in database means from cart
        e.preventDefault()
        db.collection('cartItems').doc(id).delete();
    }

    let options = []

    for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
        options.push(<option value={i}> Qty: {i}</option>)
    }
    const changeQuntity = (newQuantity) => {// It will change the database of Quantity
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }
    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQntity>
                        <select
                            value={item.quantity} // It will check the database and set the quantity
                            onChange={(e) => changeQuntity(e.target.value)}
                        >
                            {options}
                        </select>
                    </CartItemQntity>
                    <CartItemDleteContainer
                        onClick={deleteItem}
                    >
                        Delete</CartItemDleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo >
            <CartItemPrice>
                ${item.price}
            </CartItemPrice>
        </Container >
    )
}

export default CartItem
const Container = styled.div`
    padding-top: 12px;
    padding-bottom:12px;
    display: flex;
    border-bottom: 1px solid #DDD; //This is for line between the product in cart
`
const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink:0; // This container never shrink
    flex-grow:0;
    margin-right: 16px;
    img{
        object-fit: contain;
        height: 100%;
        width:100%;
    }
`
const CartItemInfo = styled.div`
    flex-grow: 1; 
`
const CartItemInfoTop = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }
`
const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
`
const CartItemQntity = styled.div`
    select{
        border-radius: 7px;
        background-color: F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);
    }
    select:focus{ // When you goto that button it light up  so this is going to remove that
        outline: none;
    }
`
const CartItemDleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer; // When the cursur goes on delete it change into cursor
`
const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`