import React, { useState } from "react";

const Display = ({ displayValue }) => {
  return(
    <div className="display">
      <h3>{displayValue}</h3>
    </div>
  )
};

export default Display;
