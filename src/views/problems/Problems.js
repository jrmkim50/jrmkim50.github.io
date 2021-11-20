import React from "react";
import {
    Link,
} from 'react-router-dom';
import problemIDtoProblem from '../../consts/problemIDtoProblem.js';

/*
Steps to add problem: 
1. Add the problem ID to the const file.
2. Add a markdown with the filename as problem ID.
*/

export default function Problems() {
    return (
        <div>
            <h2>Check out my solutions to problems from CSES.fi:</h2>
            <ol>
                {Object.keys(problemIDtoProblem).map(key => {
                    return <li key={key}><Link to={`/problems/${key}`}>{problemIDtoProblem[key]}</Link></li>
                })}
            </ol>
        </div>
    )
}