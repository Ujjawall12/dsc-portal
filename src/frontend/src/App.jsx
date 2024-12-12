import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              About
            </>
          }
        />
        <Route path="/us" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
