import React from "react";
import ifrcIcons from "../../assets/icons/zip/icons-IFRC.zip"
import ochaIcons from "../../assets/icons/zip/icons-OCHA.zip"
import generalIcons from "../../assets/icons/zip/icons-general.zip"

function Button({children, ...props}) {
    if (props.ftype === 'zip') {
       return (
           <button
           className={`button button--${props.size} button--${props.type}`}
           ><a href={props.fname === 'ochaIcons' ? ochaIcons : (props.fname === 'ifrcIcons' ? ifrcIcons : generalIcons)}>
           <span className='f-icon-download font-size-sm spacing-half-r'></span>
           {props.text}{props.fnam}
           </a>
           </button>
       )
    }
    return (
        <button
            tabIndex="0"
            className={`button button--${props.size} button--${props.type}`}
            {...props}
        >
            {props.icon === 'download' ? (
                <span className='f-icon-download font-size-sm spacing-half-r'></span>
            ) : null}
            {props.icon === 'back' ? (
                <span className='f-icon-chevron-left font-size-sm spacing-half-r'></span>
            ) : null}
            {props.icon === 'down' ? (
                <span className='underline f-icon-arrow-down'></span>
            ) : null}

            {props.text}

            {props.icon === 'dropdown' ? (
                <span className="f-icon-sm-triangle-down spacing-half-l"></span>
            ) : null}

        </button>
    );
}

export default Button;
