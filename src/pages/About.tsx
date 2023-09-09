import React from "react"

export const About: React.FC = () => {

    return (
        <main className="w-1/2 mx-auto mt-4">
            <h1 className="text-4xl my-3">About</h1>
            <h3 className="text-2xl mt-2 mb-1">What is ARK API?</h3>
            <p className="text-base">
                ARK API is a RESTful API that gives detailed information on many objects related to the survival game ARK Survival Evolved.
                This includes the game's events, creatures, egg types, etc. The site is created using React and backend is hosted on Render.
            </p>
            <h3 className="text-2xl mt-2 mb-1">Who made this?</h3>
            <p className="text-base">
                This is a personal project I've created to showcase my knowledge of APIs/Front-end development/Web Scraping
                working with one of my favorite survival games. The layout of my site is heavily inspired by <a className="text-light-green-2 hover:text-light-green-3 focus:text-dark-green-3" href="https://pokeapi.co/">PokeAPI</a>.
            </p>
            <h3 className="text-2xl mt-2 mb-1">What frameworks/languages did I use to build this?</h3>
            <p className="text-base">
                I used ReactJs to build the documentation/test page. The RESTful API utilizes Express framework that exposes a MongoDB database.
            </p>
            <h3 className="text-2xl mt-2 mb-1">Where did I get this data?</h3>
            <p className="text-base">
                I scraped all of this data from <a className="text-light-green-2 hover:text-light-green-3 focus:text-dark-green-3" href="https://ark.fandom.com/wiki/ARK_Survival_Evolved_Wiki">ARK: Survival Evolved Fandom</a>.
                I intend to keep adding more data even with ARK 2's release supposedly (hopefully) in late 2024. Feel free to visit my
                <a className="text-light-green-2 hover:text-light-green-3 focus:text-dark-green-3" href="https://www.perp-cuison.com/"> personal portfolio</a> and message me about tips or pointers I can make to the API.
            </p>
        </main>
    )
}