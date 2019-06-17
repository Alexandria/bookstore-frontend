import React from 'react'

import { NavLink } from 'react-router-dom'


export const Navigaiton = () => {
    return (
        <div>
            <NavLink to="/home" exact >
                Home
            </NavLink>
            <br />
            <NavLink to="/checkin" exact >
                Check In Book
            </NavLink>
            <br />
            <NavLink to="/login" exact >
                Login
            </NavLink>
            <br />
            <NavLink to="/signup" exact >
                Sign Up
            </NavLink>

        </div>
    )
}