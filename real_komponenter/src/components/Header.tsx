import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="top">
            <Logo></Logo>
            <h1>header</h1>
            <Navbar></Navbar>
        </div>
    )
}

export default Header