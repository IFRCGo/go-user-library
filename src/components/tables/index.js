import React from "react";

function Tables({ children, ...props }) {
    return (
        <tables
            tabIndex="0"
            {...props}
        >
            {children}
        </tables>
    );
}
export default Tables;
