import React, { useState, useEffect } from "react";
import giga from "./giga.json";
import axios from "axios";
import "./ApiDemoView.css";
import JsonViewer from "../JsonViewer/JsonViewer";

const ApiDemoView = () => {

    const baseUrl = "https://ark-api-pqh4.onrender.com/api/";

    const [resourceData, setResourceData] = useState(giga);
    const [notFound, setNotFound] = useState(false);
    const [resourceURL, setResourceURL] = useState("creatures/Giganotosaurus");
    const [userInput, setInput] = useState("creatures/Giganotosaurus");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchData(resourceURL);
    }, [resourceURL]);

    function fetchData(url) {
        setLoading(true);
        setNotFound(false);
        setError(null);

        axios.get(baseUrl + url)
        .then((response) => {
            console.log(response.status);
            if (response.status === 404) {
                setNotFound(true);
                setLoading(false);
            } else if (response.status >= 400) {
                setError(`${response.status} ${response.statusText}`);
                setLoading(false);
            } else {
                setResourceData(response.data);
                setLoading(false);
            }
        })
        .catch(error => {
            setResourceData(null);
            setLoading(false);
            setNotFound(false);
            setError(error);    
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setResourceURL(userInput);
    }

    let status;
    if (notFound) status = 'Resource not found';
    else if (error) status = `An error occurred: "${error}"`;
    else if (loading) status = 'Loading...';
    else if (resourceData)
        status = `Resource for ${resourceData.name || userInput}`;
    else status = 'An unknown error occurred';

    return (
        <div className="api-view-container">
            <form onSubmit={handleSubmit}>
                <label>
                    https://ark-api-pqh4.onrender.com/api/
                </label>
                <input type="text" value={userInput} onChange={event => setInput(event.target.value)} />
                <button type="submit" >SUBMIT</button>
            </form>
            <h2>{ status }</h2>
            <JsonViewer json={resourceData}/>
        </div>
    )
};

export default ApiDemoView;