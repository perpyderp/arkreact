import React from "react";

const ApiDemoView = (props) => {
    return (
        <div className="api-view-container">
            <h2>{props.message}</h2>
            <pre className="json-viewer">
                {JSON.stringify(props.resourceData, null, 5)}
            </pre>
        </div>
    )
};

export default ApiDemoView;