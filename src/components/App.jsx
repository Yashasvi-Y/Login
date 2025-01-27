import React from "react";
import Login from "./Login";

var isLoggenIn = true;

function App() {
  return (
    <div className="container">
      {isLoggenIn === true ? <h1> Hello User</h1> : <Login />}
    </div>
  );
}

export default App;
