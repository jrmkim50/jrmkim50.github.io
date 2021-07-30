import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import './Post.css';

export default function Post({ ids }) {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [validID, setValidID] = useState(true);
    const [error, setError] = useState('');
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        setLoading(true);
        console.log(id, ids);
        setValidID(id in ids);
        getMarkdown(id);
    }, [id, ids])

    const getMarkdown = async id => {
        try {
            let md = require(`../../assets/markdowns/${id}.md`);
            const response = await fetch(md.default)
            const text = await response.text();
            console.log(text);
            setMarkdown(text);
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return loading ? <div/> :
        validID ? 
            <div>
                { (!loading && !error) && <ReactMarkdown children={ markdown }/> }
                { error && <p className="errorMessage">{ error }</p> }
            </div>
            :
            <div>
                <h2>{ id } not found!</h2>
            </div>
}