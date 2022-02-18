import React from "react";
import "../styles/index.scss";
import Persons from "./persons";
import webPackImage from "../images/wbpack.png";
const App = () => {
  return (
    <>
      <section className="hero"></section>

      <main>
        <section>
          <h1>hi react</h1>
        </section>
        <img src={webPackImage} width="150" alt="webpack-log" />
        <Persons />
      </main>
    </>
  );
};

export default App;
