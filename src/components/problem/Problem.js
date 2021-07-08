import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import problemDict from "../../consts/problemIDtoProblem";
import Background from "../general/Background/Background";
import backgroundImage from "../../assets/paint-background.jpeg";
import './Problem.css';

export default function Problem() {
    const { problemID } = useParams();
    const [loading, setLoading] = useState(true);
    const [validProblem, setValidProblem] = useState(true);
    const [error, setError] = useState('');
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        setValidProblem(problemID in problemDict);
        setLoading(false);
        getMarkdown(problemID).then(text => {
            setMarkdown(text);
        })
    }, [problemID])

    const getMarkdown = async problemID => {
        try {
            let md = require(`../../assets/markdowns/${problemID}.md`);
            const response = await fetch(md.default)
            const text = await response.text();
            return text;
        } catch(err) {
            setError(err.message);
        }
        return '';
    }

    if (loading) {
        return (
            <Background path={backgroundImage} />
        )
    } else if (validProblem) {
        return (
            <div>
                <Background path={backgroundImage} />
                { !loading && <ReactMarkdown children={ markdown }/> }
                { error && <p className="errorMessage">{ error }</p> }
            </div>
        )
    } else {
        return (
            <div>
                <Background path={backgroundImage} />
                <h2>Problem { problemID } not found!</h2>
            </div>
        )
    }
}