import React from 'react'
// import Registration from '../Components/Registration'
import { Link } from 'react-router-dom';
const Elements = () => {
    return (
        <div>
            <Link to="/SignIn">
                <h1>
                    SignIn
                </h1>
            </Link>
            {/* <div className='grid grid-cols-3'>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div> */}
        </div>
    )
}

export default Elements