import { db } from './firebase';
import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import Product from './Product'
import { NavLink } from 'react-router-dom';
import '../Css/Home.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../Css/styles.css'

// import required modules
import { Navigation } from 'swiper/modules';


function Home({ signIn, signOut }) {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
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
        <Container className='ContainerPart1'>
            <Banner className='BannerPart1'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg" alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/ATF/Unrec/Kotak_bankStripe/Shoes/Shoes_3000._CB599886137_.jpg" alt='' /></SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/BISS_GW/GWNEW/GWNEW2/PC._CB600098968_.jpg" alt='' />
                    </SwiperSlide>
                </Swiper>
                <div className="h-[50%] bg-gradient-to-b from-stone-900" />
            </Banner>
            <Content className='ContentPart1'>
                {
                    products.map((data) => (
                        <Product
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    ))
                }
                <LogPart className='for-SignIn-part'>
                    <h2 className='text-sign-in'>Sign in for your best experience</h2>
                    <ButtonforSignIn className='Sign-in-written-part'>

                        <NavLink to="/signIn" className='imge-link'>Sign in securely</NavLink>


                    </ButtonforSignIn>
                </LogPart>
            </Content>
        </Container>

    )
}

export default Home

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
    // background-color: solid
    margin-top: -350px;
    position: relative;
    display: flex;
    // margin-left: 115px;
    flex: grow;
`
const LogPart = styled.div``
const ButtonforSignIn = styled.button`
    :hover {
        background: #ddb347;
    }

`