import React from "react";
import { creatures, armors, eggTypes } from "../../docsData/index";
import "./Documentation.css";
import DocsApiContent from "../../components/DocsApiContent/DocsApiContent";

const Documentation = () => {
    return (
        <>
        <div className="documentation-container">
            <nav className="documentation-side-navbar">
                <ul className="documentation-side-list">
                    <h3>Creatures</h3>
                    <li>
                        <a href="#creatures">Creatures</a>
                    </li>
                    <li>
                        <a href="#creature-dossier">Creature Dossiers</a>
                    </li>
                    <h3>Armors/Saddles</h3>
                    <li>
                        <a href="#armors">Armors</a>
                    </li>
                    <li>
                        <a href="#saddles">Saddles</a>
                    </li>
                    <h3>Egg Types</h3>
                    <li>
                        <a href="#egg-types">Egg Types</a>
                    </li>
                    <li>
                        <a href="#kibbles">Kibbles</a>
                    </li>
                </ul>
            </nav>
            <div className="doc-content">
                <h2>Documentation</h2>
                <h3>Information</h3>
                <p>
                    This API is only utilizes HTTP GET request method. All requests are open and no authentication is required. This is a personal project I've created
                    to showcase my knowledge of APIs working with one of my survival games.
                </p>
                <h2 id="creatures">Creatures</h2>
                <DocsApiContent data={creatures}/>
            </div>

        </div>
        </>
    );
};

export default Documentation;