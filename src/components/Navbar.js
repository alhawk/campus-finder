import React from 'react'
import {useHistory,Link} from "react-router-dom"

function Navbar() {
    const history = useHistory()
    return (
        <div class="container mx-auto p-5">
            <nav class="flex justify-between">
                <div>
                    <a href="/">Logo</a>
                </div>
                <ul class="flex flex-row">
                    <li class="pr-5"><Link to="/">Home</Link></li>
                    <li class="pr-5"><Link to="/login">Login</Link></li>
                    <li class="pr-5"><Link to="/register">Register</Link></li>
                    <li class="pr-5"><Link to="/favorites">Favorites</Link></li>
                    <li class="pr-5"><Link to="/newsletter">Newsletter</Link></li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
