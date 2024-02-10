// import React from 'react';
import './greetings.css';
const GreetingsComp = () => {
  return (
    <div className="greetingsContainer">
      <div className="gretingsRight">
        <h3>Good morning!</h3>
        <p>You got some task to do. </p>
      </div>
      <button className="greetinsBTN">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00008 1.16666V12.8333M1.16675 6.99999H12.8334"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Create New Task
      </button>
    </div>
  );
};

export default GreetingsComp;
