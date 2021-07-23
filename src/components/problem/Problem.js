import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import problemDict from "../../consts/problemIDtoProblem";
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
        getMarkdown(problemID);
    }, [problemID])

    const getMarkdown = async problemID => {
        try {
            let md = require(`../../assets/markdowns/${problemID}.md`);
            const response = await fetch(md.default)
            const text = await response.text();
            setMarkdown(text);
        } catch(err) {
            setError(err.message);
        }
    }

    return loading ? <div/> :
        validProblem ? 
            <div>
                { !loading && <ReactMarkdown children={ markdown }/> }
                { error && <p className="errorMessage">{ error }</p> }
            </div>
            :
            <div>
                <h2>Problem { problemID } not found!</h2>
            </div>
}