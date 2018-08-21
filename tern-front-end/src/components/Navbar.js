import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Tern</span>
            <nav>
                <a href="/ComposeEntry">Write</a>
                <a href="#">Settings</a>
            </nav>
        </div>
    );
};

export default Navbar;
