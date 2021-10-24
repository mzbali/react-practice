import { useReducer } from 'react';

const initialValue = { value: '', isTouched: false };

const valueReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { value: action.value, isTouched: state.isTouched };
    case 'BLUR':
      return { value: state.value, isTouched: action.isTouched };
  }
  return initialValue;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(valueReducer, initialValue);

  const valueIsValid = validateValue(inputState.value);
  const hasError = inputState.isTouched && !valueIsValid;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'CHANGE', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR', isTouched: true });
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    enteredValue: inputState.value,
    valueIsValid: inputState,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
