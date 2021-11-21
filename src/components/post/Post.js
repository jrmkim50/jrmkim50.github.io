import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import './Post.css';

export default function Post({ ids }) {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [validID, setValidID] = useState(false);
    const [error, setError] = useState('');
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        setLoading(true);
        setValidID(id in ids);
        setLoading(id in ids);
    }, [id, ids])

    useEffect(() => {
        if (validID) {
            getMarkdown(id);
        }
    }, [validID, id])

    const getMarkdown = async id => {
        try {
            let md = await import(`../../assets/markdowns/${id}.md`);
            const response = await fetch(md.default)
            const text = await response.text();
            setMarkdown(text);
            setError('');
        } catch(err) {
            if (process.env.NODE_ENV === 'development') {
                setError(err.message, err.stack);
            } else {
                setError('Trouble getting article. Try again, please!')
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        loading ? 
            <div>Loading</div> :
            validID ? 
                <div style={{ maxWidth: '90vw' }}>
                    { !loading && 
                      <ReactMarkdown 
                          children={ markdown }
                          components = {{
                              code: ({ node, ...props }) => (
                                <p style={{ whiteSpace: 'pre-wrap' }} {...props}/>
                              )
                          }}
                      /> 
                    }
                    { error && <p className="errorMessage">{ error }</p> }
                </div>
                :
                <div>
                    <h2>{ id } not found!</h2>
                </div>
    );
}