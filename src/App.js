import "./App.css";
import { Routes, Route } from "react-router-dom";
import WarmJobs from "./pages/WarmJobs";
import ColdJobs from "./pages/ColdJobs";

function App() {
  return (
    <div>
      hello we are reactors
      <Routes>
        <Route path="/warm" element={<WarmJobs />} />
        <Route path="/cold" element={<ColdJobs />} />
      </Routes>
    </div>
  );
}

export default App;
