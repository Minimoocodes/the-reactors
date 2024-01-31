import "./App.css";
import { Routes, Route } from "react-router-dom";
import WarmJobs from "./pages/WarmJobs";
import ColdJobs from "./pages/ColdJobs";
import ApplyPage from "./pages/ApplyPage";
import WarmOrColdPage from "./pages/WarmOrColdPage";
import NavBar from "./components/NavBar";
import AboutUsPage from "./pages/AboutUsPage";
import LandingPage from "./pages/LandingPage";
import json from "./jobAds.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const data = json;
  console.log(data["backend-developer"]);

  const [jobDetails, setJobDetails] = useState([]);

  const navigate = useNavigate();
  function handleApplyForJob(title, description) {
    setJobDetails([title, description]);
    navigate("/apply");
  }

  function handleNavigation(job) {
    navigate(`/${job}`);
  }

  return (
    <div>
      <NavBar />

      <Routes>

        <Route path="/warmorcold" element={<WarmOrColdPage />} />

        <Route path="/aboutus" element={<AboutUsPage />} />

        <Route path="/" element={<LandingPage navigate={handleNavigation} />} />
        <Route
          path="/warm"
          element={<WarmJobs jsonData={data} apply={handleApplyForJob} />}
        />
        <Route
          path="/cold"
          element={<ColdJobs jsonData={data} apply={handleApplyForJob} />}
        />
        <Route
          path="/apply/:id/:location"
          element={<ApplyPage jsonData={data} />}
        />
      </Routes>
    </div>
  );
}

export default App;
