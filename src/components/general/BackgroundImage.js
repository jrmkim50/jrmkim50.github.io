import React from "react";
import createBackground from "../../utils/createBackground";
import PaintBackground from '../../assets/paint-background.jpeg';
import BlueBackground from '../../assets/blue-watercolor-background.jpeg';
import { useLocation } from "react-router-dom";

export default function BackgroundImage() {
    const path = useLocation().pathname;
    const createBackgroundPath = (pathName) => {
        if (pathName.includes("problems") || pathName.includes("security")) {
            return PaintBackground;
        } else {
            return BlueBackground;
        }
    }
    const backgroundPath = createBackgroundPath(path);
    const style = createBackground(backgroundPath);
    return (
        <div style={style}/>
    )
}