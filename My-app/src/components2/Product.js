import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'
import '../Css/Product.css'
const Product = ({ title, price, rating, image, id }) => { // {title, ...} it just open the box of props 
    // console.log(props)
    const addToCart = () => { // This is going to add data into the database
        const cartItem = db.collection('cartItems').doc(id);
        cartItem.get()
            .then((doc) => {
                console.log(doc);
                if (doc.exists) { // It will update the quantity if the product is alread in cart
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                }
                else {// It will add the product in cart or in database is data is not available
                    db.collection("cartItems").doc(id).set({
                        name: title,
                        image: image,
                        price: price,
                        quantity: 1
                    })
                }
            })
    }
    return (
        <div className='Container1'>
            <Container className='Contain1'>
                <Title className='Title1'>
                    {title}
                </Title>
                <Price className='Price1'>
                    ${price}
                </Price>
                <Rating className='Rating1'>
                    {
                        Array(rating)
                            .fill()
                            .map(rating => <p>⭐️</p>)
                    }
                </Rating>
                <Image className="imga1" src={image} />
                <AddToCartButton className='CartButton1'
                    onClick={addToCart}
                >
                    Add To Cart
                </AddToCartButton>
            </Container>

        </div>
    )
}

export default Product
const Container = styled.div`
    // background-color: white;
    // z-index: 100;
    // width:100%;
    // width: 550px;
    /* height: 904px; */
    // flex: 1;
    // padding: 0px;
    // margin: 25px;
    // max-height: 420px;
    // display: flex;
    // flex-direction: column;
`
const Title = styled.h3`
    margin-top:10px;
    padding-left: 15px;
`
const Price = styled.span`
    font-weight: 500;
    margin-top: 10px;
    margin-left: 14px;

`
const Rating = styled.div`

    // display: flex;
    // margin-left: 14px;

`
const Image = styled.img`
    // max-height: 302px;
    // object-fit: contain;
    // margin-top: -1px;
    // margin-left: 0px;
`
const AddToCartButton = styled.button`
    // width: 98px;
    // height: 89px;
    // margin-left: 228px;
    // margin-top: 10px;
    // background-color: #f0c14b;
    // border: 3px solid #a88734;
    // border-radius: 2px;
    // cursor: pointer;
`
