import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//Import your array data to from the provided data file

const Operators = ({ updateValue, calculateValue }) => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorState] = useState(operators);

  {/* STEP 3 - Use .map() to iterate over your array data and return a button
    component matching the name on the provided file. Pass
    it any props needed by the child component*/}

  const handleOperator = button => {
    if(button === "="){
      calculateValue();
    } else {
      updateValue(button);
    }
  }

  return(
  operatorsState.map((operator, index) => <OperatorButton key={index} operator={operator} index={index} handleOperator={() => handleOperator(operator.value)}/>)
)
};

export default Operators;
