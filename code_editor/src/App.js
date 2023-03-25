import { Routes, Route } from "react-router-dom";

import CodingPage from "./pages/coding_page";
import LandingPage from "./pages/landing_page";
import SearchingPage from "./pages/search_page";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element = {}/> */}
        <Route path="/coding_page" element={<CodingPage />} />

        <Route path="/search_page" element={<SearchingPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
