import React from "react";

function Navigation({ children, ...props }) {
    return (
        <navigation
            tabIndex="0"
            {...props}
        >
            {children}
        </navigation>
    );
}
export default Navigation;
