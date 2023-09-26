import { db } from './firebase';
import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import Product from './Product2'
import '../Css/Ac.css'
function Ac() {
    const [Ac, setProducts] = useState([])
    const getProducts = () => {
        db.collection('Ac').onSnapshot((snapshot) => {
            let tempProduct = []
            tempProduct = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProduct);
        })
    }
    useEffect(() => { // it will run when the page rander first  time
        console.log("Call products");
        getProducts()
    }, [])
    return (
        <Container>
            <Banner className='AcBg'>

            </Banner>
            <Content className='AcPro'>
                {
                    Ac.map((data) => (
                        <Product
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    ))
                }

            </Content>
        </Container>
    )
}

export default Ac
const Container = styled.div`
    
`
const Banner = styled.div`
    // background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    // min-height:600px; 
    // background-position: center;
    // background-size: cover;
    // mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`
    // margin-top: -350px;
    // position: relative;
    // display: flex;
    // margin-left: 115px;
    // flex: grow;
`