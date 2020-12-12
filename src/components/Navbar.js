import React from 'react'

function Navbar() {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/favorites">Favorites</a></li>
            </ul>
        </div>
    )
}

export default Navbar
