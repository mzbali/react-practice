import { useState } from 'react';

const useInput = (valueValidity) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = valueValidity(value);
  const isNotValid = isTouched && !isValid;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  const valueInputStyle = isNotValid ? 'form-control invalid' : 'form-control';

  return {
    value,
    isValid,
    isNotValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    valueInputStyle,
  };
};

export default useInput;
