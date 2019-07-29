import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton';


//Import your array data to from the provided data file

const [numberState, setNumberState] = useState(numberState);

const Numbers = props => {
  // STEP 2 - add the imported data to state
  <div>
    props.numbers.map(number => { <NumberButton number={number} /> })
  </div>
};

export default Numbers;
