// import React from 'react';
import GreetingsComp from '../component/greetingsComp/GreetingsComp';
import Header from '../component/header/Header';
import './home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <GreetingsComp />
      <div className="todo-main-content"></div>
    </div>
  );
};

export default Home;
