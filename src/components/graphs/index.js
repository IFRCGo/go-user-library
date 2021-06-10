import React from "react";

function Graphs({ children, ...props }) {
    return (
        <graphs
            tabIndex="0"
            {...props}
        >
            {children}
        </graphs>
    );
}
export default Graphs;
