import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/HomePage/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
