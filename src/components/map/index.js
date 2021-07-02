import React from "react";

function Map({children, ...props}) {

    console.log(props);
    return (
        <div className='inpage__body'>
            <div className='inner'>
                {props.list.map((list, i) => (
                    <iframe
                        src={list.iframe}
                        title={list.title}
                        frameBorder={list.frameBorder}
                        width={list.width}
                        height={list.height}
                    />
                ))}
            </div>
        </div>
    );
}

export default Map;
