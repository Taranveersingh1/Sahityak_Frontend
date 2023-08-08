import React from 'react';

import { Link } from 'react-router-dom'
 const Nav=()=>{
    return(
    <div >
        <ul className='Nav-ul'> 
            <li><Link to= "/home">home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to= "/blogs">Blogs</Link></li>
            <li><Link to= "/bookreview">Book Review</Link></li>
            <li><Link to= "/login">Login</Link></li>
        </ul>
    </div>
    )
 }
 export default Nav;