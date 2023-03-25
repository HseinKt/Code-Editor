import { Routes, Route } from "react-router-dom";

import CodingPage from "./pages/coding_page";
import LandingPage from "./pages/landing_page";
import SearchingPage from "./pages/search_page";
import ChatingPage from "./pages/chat_page";
import Register from "./components/register_page/register";


function App() {
  return (
    <>
      <Routes>
        <Route path="/coding_page" element={<CodingPage />} />

        <Route path="/search_page" element={<SearchingPage />} />
        <Route path="/chat_page" element={<ChatingPage />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
