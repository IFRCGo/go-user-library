import React from "react";

function Preloader({ children, ...props }) {
    return (
        <preloader
            tabIndex="0"
            {...props}
        >
            {children}
        </preloader>
    );
}
export default Preloader;
