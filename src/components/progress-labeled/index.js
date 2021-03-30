import React from "react";

const Progress = ({ max, value, children }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar__value"
          style={{ width: (value > max ? max : value) + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
