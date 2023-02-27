import React from "react";
import ConnectFourGame from "./ConnectFourGame";
import "../styles/app.css";

const App = () => {
  return (
    <div>
      <h1>Connect 4</h1>
      <ConnectFourGame className="board" />
    </div>
  );
};

export default App;
