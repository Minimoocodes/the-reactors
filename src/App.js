import "./App.css";
import { Routes, Route } from "react-router-dom";
import WarmJobs from "./pages/WarmJobs";
import ColdJobs from "./pages/ColdJobs";
import ApplyPage from "./pages/ApplyPage";
import WarmOrColdPage from "./pages/WarmOrColdPage";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import json from "./jobAds.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";

function App() {
  const data = json;

  const [jobDetails, setJobDetails] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  const navigate = useNavigate();
  function handleApplyForJob(title, description) {
    setJobDetails([title, description]);
    navigate("/apply");
  }

  return (
    <div>
      <NavBar savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/thereactors/" element={<LandingPage />} />
        <Route path="/warmorcold" element={<WarmOrColdPage />} />
        <Route path="/profiles" element={<ProfilePage />} />
        <Route
          path="/warm"
          element={
            <WarmJobs
              jsonData={data}
              apply={handleApplyForJob}
              savedJobs={savedJobs}
              setSavedJobs={setSavedJobs}
            />
          }
        />
        <Route
          path="/cold"
          element={
            <ColdJobs
              jsonData={data}
              apply={handleApplyForJob}
              savedJobs={savedJobs}
              setSavedJobs={setSavedJobs}
            />
          }
        />
        <Route
          path="/apply/:id/:location"
          element={<ApplyPage jsonData={data} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
