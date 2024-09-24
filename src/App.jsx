import React, { useState } from "react";
import "./App.css"; // for styling

const App = () => {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app " style={{ backgroundColor: bgColor, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div>
        <h1>Change Background Color</h1>
        <div className="button-group">
          <button onClick={() => changeColor("red")} className='btn btn-danger m-5'>Red</button>
          <button onClick={() => changeColor("blue")} className='btn btn-info m-5'>Blue</button>
          <button onClick={() => changeColor("green")} className='btn btn-success m-5'>Green</button>
          <button onClick={() => changeColor("yellow")} className='btn btn-warning m-5'>Yellow</button>
          <button onClick={() => changeColor("white")} className='btn btn-primary m-5'>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;