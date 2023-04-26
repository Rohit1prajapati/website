import React from 'react';
import './error.css'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <div className='max-width'>
            <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=338&ext=jpg'
            className='img' alt='ok'
            />
            <NavLink to='./' >
                <button className='btn'>Go Back</button>
            </NavLink>
        </div>
    </>
  )
}

export default Error