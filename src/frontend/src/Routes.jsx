import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "pages/AboutUs/AboutUs";
import EventsPage from "pages/Events/EventsPage";
import Team from "@/pages/Teams";
import Projects from "./pages/ProjectsPage/Projects";
import ProjectDetails from "./pages/ProjectsPage/ProjectDetails";
import NotFound from "./pages/NotFound";
import SomethingWentWrong from "./pages/SomethingWentWrong";
import SignUp from "./pages/SignUp/App";
import Homepage from "./pages/Homepage/Homepage";

function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/break" element={<SomethingWentWrong />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RouteList };
