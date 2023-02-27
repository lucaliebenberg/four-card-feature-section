import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// imports
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container">
      {/* <div className="title__wrapper"> */}
      <h1 className="container_title1">Reliable, efficient delivery</h1>
      <h1 className="container_title2">Powered by Technology</h1>
      <p className="container_para">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      {/* </div> */}
    </div>
  );
};

export default App;
