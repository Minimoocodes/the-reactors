import "./App.css";
import { Routes, Route } from "react-router-dom";
import WarmJobs from "./pages/WarmJobs";
import ColdJobs from "./pages/ColdJobs";
import ApplyPage from "./pages/ApplyPage";
import NavBar from "./components/NavBar";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <div>
      <NavBar />
      hello we are reactors
      <Routes>
        <Route path="/warm" element={<WarmJobs />} />
        <Route path="/cold" element={<ColdJobs />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
