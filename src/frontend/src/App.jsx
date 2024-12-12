import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "pages/Homepage/Homepage";
import AboutUs from "pages/AboutUs";
import Events from "pages/Events";
import Team from "pages/Team";
import Resources from "pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
