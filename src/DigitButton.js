import React from "react"; 
import { ADD_DIGIT } from "./ActionTypes";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
