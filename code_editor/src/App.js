import { Routes, Route } from "react-router-dom";
import CodingPage from "./pages/coding_page";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element = {}/> */}
        <Route path="/coding" element={<CodingPage />} />
      </Routes>
    </>
  );
}

export default App;
