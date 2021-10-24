import { useReducer } from 'react';

const initialValue = { value: '', isTouched: false };

const valueReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { value: action.value, isTouched: state.isTouched };
    case 'BLUR':
      return { value: state.value, isTouched: action.isTouched };
    case 'RESET':
      return { value: '', isTouched: false };
    default:
      return initialValue;
  }
};

const useInput = (valueValidity) => {
  const [inputState, dispatch] = useReducer(valueReducer, initialValue);

  const isValid = valueValidity(inputState.value);
  const isNotValid = inputState.isTouched && !isValid;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'CHANGE', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR', isTouched: true });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const valueInputStyle = isNotValid ? 'form-control invalid' : 'form-control';

  return {
    value: inputState.value,
    isValid: inputState.isValid,
    isNotValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    valueInputStyle,
  };
};

export default useInput;
