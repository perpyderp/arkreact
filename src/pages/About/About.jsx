import React from "react";
import { AltHeader } from "../../components/index";

import "./About.css";

const About = () => {
    return (
        <>
        <AltHeader />
        <div className="shrink-width">
        <div className="about-container">
            <h1 style={{fontSize: 50}}>About</h1>
            <h3 className="about-qa-title">What is ARK API?</h3>
            <p className="about-qa-desc">
                ARK API is a RESTful API that gives detailed information on many objects related to the survival game ARK Survival Evolved.
                This includes the game's events, creatures, egg types, etc. The site is created using React and backend is hosted on Render.
            </p>
            <h3 className="about-qa-title">Who made this?</h3>
            <p className="about-qa-desc">
                This is a personal project I've created to showcase my knowledge of APIs/Front-end development/Web Scraping
                working with one of my favorite survival games. The layout of my site is heavily inspired by <a href="https://pokeapi.co/">PokeAPI</a>.
            </p>
            <h3 className="about-qa-title">What frameworks/languages did I use to build this?</h3>
            <p className="about-qa-desc">
                I used ReactJs to build the documentation/test page. The RESTful API utilizes Express framework that exposes a MongoDB database.
            </p>
            <h3 className="about-qa-title">Where did I get this data?</h3>
            <p className="about-qa-desc">
                I scraped all of this data from <a href="https://ark.fandom.com/wiki/ARK_Survival_Evolved_Wiki">ARK: Survival Evolved Fandom</a>.
                I intend to keep adding more data even with ARK 2's release supposedly (hopefully) in late 2024. Feel free to visit my
                <a href="https://www.perp-cuison.com/"> personal portfolio</a> and message me about tips or pointers I can make to the API.
            </p>
        </div>
        </div>
        </>
    );
};

export default About;