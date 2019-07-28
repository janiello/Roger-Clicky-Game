import React from "react";
import "./navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Roger's Attic</a>
                </li>
                <li className="start">Click an image to start!</li>
                <li className="score">
                    Score: {props.children} |
                    Top Score: {props.children}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;