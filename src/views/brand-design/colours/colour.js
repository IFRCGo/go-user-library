import React from 'react';

const ColourItem = (props) => {
    return (
      <div className="box">
        <div className={`box-bg ${props.class}`}></div>
        <div className="box-text">
          <p className="small-print box-title">{props.name}</p>
          <p className="box-hex">{props.hex}</p>
          <p className="box-rgb">{props.rgb}</p>
        </div>  
      </div>
    );
};

export default ColourItem;