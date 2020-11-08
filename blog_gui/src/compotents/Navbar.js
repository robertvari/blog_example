import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Navbar.css"

function Navbar(props) {
    return (
        <div className="navbar_container">
            <Link to="/"><h1>My Blog</h1></Link>
        </div>
    );
}

export default Navbar;