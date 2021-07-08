import React from "react";
import { 
    useRouteMatch,
    Link,
} from 'react-router-dom';
import Background from "../../components/general/Background/Background";
import backgroundImage from "../../assets/paint-background.jpeg";
import './Problems.css';
import problemIDtoProblem from '../../consts/problemIDtoProblem.js';

/*
Steps to add problem: 
1. Add the problem ID to the const file.
2. Add a markdown with the filename as problem ID.
*/

export default function Problems() {
    const match = useRouteMatch();
    console.log(match.url)
    return (
        <div>
            <Background path={backgroundImage} />
            <h2>Check out my solutions to problems from CSES.fi:</h2>
            <ol>
                {Object.keys(problemIDtoProblem).map(key => {
                    return <li><Link to={`/problems/${key}`} key={key}>{problemIDtoProblem[key]}</Link></li>
                })}
            </ol>
        </div>
    )
}