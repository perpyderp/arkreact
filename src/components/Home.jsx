import React, { useEffect, useState } from "react";
import axios from "axios";
import { Logo } from '../assets/images/index';

import giga from "./giga.json";

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

        axios.get("http://localhost:3001/api/" + url)
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

    let message;
    if (notFound) message = 'Resource not found';
    else if (error) message = `An error occurred: "${error}"`;
    else if (loading) message = 'Loading...';
    else if (resourceData)
        message = `Resource for ${resourceData.name || userInput}`;
    else message = 'An unknown error occurred';

    return (
        <div>
        <header>
            <a className="header-logo-homelink" href="/"><img className="header-logo-homelink" src={Logo} alt="giga-logo"/>ARK API</a>
            <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/docs">Documentation</a>
            </nav>
        </header>
        <main id="site-content">
            <section id="introduction">
            <h1>Welcome to the ARK API</h1>
            <p>Allows access to ARK data including creatures, items, and much more!</p>
            </section>
            <div>
                <h2>Try out the creatures endpoint!</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        https://ark-api-pqh4.onrender.com/api/
                    </label>
                    <input type="text" value={userInput} onChange={event => setInput(event.target.value)} />
                    <button type="submit" >SUBMIT</button>
                </form>

            </div>
            <div>
                <h2>{message}</h2>
                {JSON.stringify(resourceData)}
            </div>
        </main>
      </div>
    )
};

export default Home;