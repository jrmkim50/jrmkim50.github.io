import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/security">Security</Link>
            <Link to="/problems">CSES Problems</Link>
        </nav>
    )
}