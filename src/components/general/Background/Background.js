import React from 'react';

export default function Background({ path }) {
    const style = {
        backgroundImage: 'url(' + path + ')',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        right: 0,
        opacity: 0.5,
        zIndex: -1,
        backgroundSize: 'cover',
    };

    return (
        <div className="bg" style={style}/>
    )
}