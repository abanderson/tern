import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
    console.log(props);
    return (
        <div className="navbar">
            <Link className="logo-link" to="/">
                <span className="logo">Tern</span>
            </Link>
            {props.user != null ? (
                <nav>
                    <Link to="/new-entry">Write</Link>
                    <a href="http://localhost:3001/logout">Logout</a>
                </nav>
            ) : (
                <span />
            )}
        </div>
    );
};

export default Navbar;
