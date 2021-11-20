import React, { useEffect, useState } from "react";
import createBackground from "../../utils/createBackground";
import { useLocation } from "react-router-dom";

export default function BackgroundImage() {
    const location = useLocation();
    const [style, setStyle] = useState(null);

    useEffect(() => {
        const { pathname } = location;
        const showBackground = async (pathName) => {
            try {
                let backgroundPath = null;
                if (pathName.includes("problems") || pathName.includes("security")) {
                    backgroundPath = await import("../../assets/paint-background.jpeg");
                } else {
                    backgroundPath = await import("../../assets/blue-watercolor-background.jpeg");
                }
                if (backgroundPath?.default) {
                    setStyle(createBackground(backgroundPath.default));
                }
            } catch (err) {
                if (process.env.NODE_ENV === 'development') {
                    console.log(err.message, err.stack)
                }
            }
        }
        showBackground(pathname)
    }, [location])

    return (
        <div style={style || {}}/>
    )
}