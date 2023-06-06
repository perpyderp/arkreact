import React from "react";
import { ARKniversary } from "../../assets/images";
import { ApiDemoView, Header } from "../../components/index";

import "./Home.css";

const Home = () => {

    return (
        <>
        <div className="intro-container">
        <Header />
            <div className="welcome-container">
                <h1>Welcome to the ARK API</h1>
                <p>Allows access to ARK data including creatures, items, and much more!</p>
            </div>
            <img className="home-img" src={ ARKniversary } alt="home-img"/>
        </div>
        <div className="api-test-container">
            <h2>Try out the creatures endpoint!</h2>
            <ApiDemoView />
        </div>
        </>
    )
};

export default Home;