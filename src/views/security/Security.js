import React from "react";
import {
    Link,
} from 'react-router-dom';
import securityIDs from '../../consts/securityIDs';

export default function Security() {
    return (
        <div>
            <h2>Check out some interesting things I found for cyber security:</h2>
            <ol>
                {Object.keys(securityIDs).map(key => {
                    return <li key={key}><Link to={`/security/${key}`}>{securityIDs[key]}</Link></li>
                })}
            </ol>
        </div>
    )
}