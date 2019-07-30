import React, { useState } from "react";

//import any components needed
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

//Import your array data to from the provided data file

const Specials = ({ updateValue, resetValue }) => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials);

  const handleSpecial = button => {
    if(button === 'C'){
      resetValue();
    } else {
      updateValue(button);
    }
  }


{/* STEP 3 - Use .map() to iterate over your array data and return a button
component matching the name on the provided file. Pass
it any props needed by the child component*/}
  return (
       specialsState.map((special, index) => <SpecialButton key={index} special={special} index={index} updateValue={() => handleSpecial(special)}/>)
  );
};

export default Specials;
