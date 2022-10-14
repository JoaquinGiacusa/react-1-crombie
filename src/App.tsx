import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState<number>(0);

  const increase = () => {
    if (number >= 0 && number <= 9) {
      setNumber(number + 1);
    }
  };

  const decrease = () => {
    if (number > 0 && number <= 10) {
      setNumber(number - 1);
    }
  };

  /*   const increaseAsync = () => {
    setTimeout(() => {
      setNumber((currentNumber) => currentNumber + 1);
    }, 2000);
  }; */

  return (
    <div style={{ margin: "0 auto", border: "3px solid gray", width: "15em" }}>
      <button
        className="btn increase"
        onClick={increase}
        disabled={number == 10 ? true : false}
      >
        Sumar +
      </button>
      <button
        className="btn descrease"
        onClick={decrease}
        disabled={number == 0 ? true : false}
      >
        Decrese
      </button>
      {/* <button onClick={increaseAsync}>Increase Async</button> */}
      <h1 className={`counter ${number == 10 || number == 0 ? "red" : ""}`}>
        {number}
      </h1>
    </div>
  );
}

export default App;
