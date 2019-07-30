import React, { useState } from "react";
import { numbers } from '../../../data';

//import any components needed
import NumberButton from './NumberButton';


//Import your array data to from the provided data file
const handleClick = (number) => {
  console.log(number);
}

const Numbers = ({ updateValue }) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return(
    numberState.map((number, index) => <NumberButton key={index} number={number} index={index} updateValue={() => updateValue(number)}/>)
  )
};

export default Numbers
