import React from "react";
import Background from "../../components/general/Background/Background";
import backgroundImage from "../../assets/blue-watercolor-background.jpeg";
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <Background path = {backgroundImage}/>
            <h1>Hi! I'm Jeremy.</h1>
        </div>
    )
}