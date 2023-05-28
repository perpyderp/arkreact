import React, { useEffect, useState } from "react";
import axios from "axios";

import giga from "../components/giga.json";
import { ApiDemoView } from "../components/index";

const Home = () => {

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

        axios.get("https://ark-api-pqh4.onrender.com/api/" + url)
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
        <div>        
        <div id="introduction">
        <h1>Welcome to the ARK API</h1>
        <p>Allows access to ARK data including creatures, items, and much more!</p>
        </div>
        <div className="api-test-container">
            <h2>Try out the creatures endpoint!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    https://ark-api-pqh4.onrender.com/api/
                </label>
                <input type="text" value={userInput} onChange={event => setInput(event.target.value)} />
                <button type="submit" >SUBMIT</button>
            </form>
        <ApiDemoView resourceData={resourceData} message={status}/>
        </div>
        </div>
    )
};

export default Home;