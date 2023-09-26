import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase'
function Login({ setUser }) {
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
    return (
        <Container>
            <Content>
                <AmazonLogo src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'} />
                <h1>Sign into Amazon</h1>
                <LoginButton
                    onClick={signIn}
                >
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display:grid;
    place-items:center;
`
const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius:  5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`
const AmazonLogo = styled.img`
    height:  100px;
    margin-botton: 40px;
`

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid 3a88734;
    border-radius:4px;
    padding: 4px 8px;
    cursor: pointer;
`