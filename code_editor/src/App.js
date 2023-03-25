import { Routes, Route } from "react-router-dom";
import CodingPage from "./pages/coding-page";
import LandingPage from "./pages/landing_page";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element = {}/> */}
        <Route path="/coding_page" element={<CodingPage />} />
        <Route path="/" element={<LandingPage />} />

        <Route path="/coding" element={<CodingPage />} />
      </Routes>
    </>
  );
}

export default App;
