import React from "react";
import createBackground from "../../utils/createBackground";
import PaintBackground from '../../assets/paint-background.jpeg';
import BlueBackground from '../../assets/blue-watercolor-background.jpeg';
import { useLocation } from "react-router-dom";

export default function BackgroundImage() {
    const path = useLocation().pathname;
    const backgroundPath = path.includes("problems") ? 
        PaintBackground : BlueBackground;
    const style = createBackground(backgroundPath);
    return (
        <div style={style}/>
    )
}