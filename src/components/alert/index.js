import React from "react";

function Alert({ children, ...props }) {
    return (
        <alert
            tabIndex="0"
            {...props}
        >
            {children}
        </alert>
    );
}
export default Alert;
