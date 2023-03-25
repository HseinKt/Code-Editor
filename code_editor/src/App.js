import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import users_table from "./components/admin_panel/users";

function App() {
  return (
    <div>
      <users_table />
    </div>
  );
}

export default App;
