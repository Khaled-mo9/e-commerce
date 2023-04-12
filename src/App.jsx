import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AppRoute from "./Routing/AppRoute";
function App() {
  return (
    <div className="App bg-bodyBg">
      <AppRoute />
    </div>
  );
}

export default App;
