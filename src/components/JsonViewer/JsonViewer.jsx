import React from "react";
import "./JsonViewer.css";

const JsonViewer = (props) => {
    return (
        <div className="json-container">
            <pre className="json-data">
                {JSON.stringify(props.json, null, 5)}
            </pre>
        </div>
    )
};

export default JsonViewer;