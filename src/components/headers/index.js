import React from "react";

function Headers({ children, ...props }) {
    return (
        <headers
            tabIndex="0"
            {...props}
        >
            {children}
        </headers>
    );
}
export default Headers;
