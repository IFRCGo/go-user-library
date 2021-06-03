import React from "react";

function Filters({ children, ...props }) {
    return (
        <filters
            tabIndex="0"
            {...props}
        >
            {children}
        </filters>
    );
}
export default Filters;
