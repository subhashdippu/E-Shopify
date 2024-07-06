import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'
import '../Css/Product2.css'
const Product = ({ title, price, rating, image, id }) => {
    const addToCart = () => {
        const cartItem = db.collection('cartItems').doc(id);
        cartItem.get()
            .then((doc) => {
                console.log(doc);
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                }
                else {
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
        <div className='Container'>
            <Container className='Contain'>
                <Title className='Title'>
                    {title}
                </Title>
                <Price className='Price'>
                    ${price}
                </Price>
                <Rating className='Rating'>
                    {
                        Array(rating)
                            .fill()
                            .map(rating => <p>⭐️</p>)
                    }
                </Rating>
                <Image className="imga" src={image} />
                <AddToCartButton className='CartButton'
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
    // width: 550px;
    // height: 904px; 
    // flex: 1;
    // padding: 0px;
    // margin: 25px;
    // max-height: 420px;
    // display: flex;
    // flex-direction: column;
    // width: 100%;
    // object-fit: cover;
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
    // width: 100%;
    // object-fit: cover;
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
