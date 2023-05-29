import React from "react";
import JsonViewer from "../JsonViewer/JsonViewer";

const DocsApiContent = (props) => {

    const data = props.data;
    const baseUrl = "https://ark-api-pqh4.onrender.com/api/";
    

    return(
        <>
            {data.map((doc) => (
                <div key={doc.id}>
                    <h4>{doc.name}</h4>
                    <p>{doc.description}</p>
                    <p>{baseUrl + doc.exampleRequest}</p>
                    <JsonViewer json={doc.exampleResponse} />
                </div>
            ))}
        </>
    )
}

export default DocsApiContent;