import React from "react";
import { ApiDemoView } from "../../components/index";

import "./Home.css";

const Home = () => {

    return (
        <div>        
        <div id="introduction">
        <h1>Welcome to the ARK API</h1>
        <p>Allows access to ARK data including creatures, items, and much more!</p>
        </div>
        <div className="api-test-container">
            <h2>Try out the creatures endpoint!</h2>
            <ApiDemoView />
        </div>
        </div>
    )
};

export default Home;