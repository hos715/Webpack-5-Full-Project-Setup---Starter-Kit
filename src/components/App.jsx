import React from "react";
import "../styles/index.scss";
import Persons from "./persons";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>hi react</h1>
        </section>
        <Persons />
      </main>
    </>
  );
};

export default App;
