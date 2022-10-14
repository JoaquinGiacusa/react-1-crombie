import React, { useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState<number>(0);

  // const increase = () => {
  //   if (number >= 0 && number <= 9) {
  //     setNumber(number + 1);
  //   }
  // };

  const increase = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const decrease = () => {
    setNumber((prev) => {
      return prev - 1;
    });
  };

  return (
    <div className="container">
      <h1 className="title">Contador</h1>
      <div className="btn-container">
        <button
          className={`btn ${number == 10 ? "error" : ""}`}
          onClick={increase}
          disabled={number == 10 ? true : false}
        >
          Sumar +
        </button>
        <button
          className={`btn ${number == 0 ? "error" : ""}`}
          onClick={decrease}
          disabled={number == 0 ? true : false}
        >
          Restar -
        </button>
      </div>
      <h1 className={`counter ${number == 10 || number == 0 ? "red" : ""}`}>
        {number}
      </h1>
      <img
        className="refresh"
        src="./refresh.svg"
        alt=""
        width={"20px"}
        onClick={() => {
          setNumber(0);
        }}
      />
    </div>
  );
}

export default App;
