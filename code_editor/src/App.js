import { Routes, Route } from "react-router-dom";

import CodingPage from "./pages/coding_page";
import LandingPage from "./pages/landing_page";
import SearchingPage from "./pages/search_page";
import ChatingPage from "./pages/chat_page";
import Register from "./components/register_page/register";
import Login from "./components/login_page/login";
import NotFound from "./components/not_found/not_found";


function App() {
  return (
    <>
      <Routes>
        <Route path="/coding_page" element={<CodingPage />} />

        <Route path="/search_page" element={<SearchingPage />} />
        <Route path="/chat_page" element={<ChatingPage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
