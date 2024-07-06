

import React, { useEffect } from 'react'
import { NavLink, useHistory, Link } from 'react-router-dom';
const refresh = () => window.location.reload(true)
const SignOut = () => {
    const history = useHistory();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            history.push('/signin', { replace: true });
            refresh()
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err)
            refresh()
        })
    })
    return (
        <div>SignOut</div>
    )
}

export default SignOut