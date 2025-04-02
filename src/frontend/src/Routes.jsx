import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "pages/AboutUs/AboutUs";
import EventsPage from "pages/Events/EventsPage";
import Projects from "./pages/ProjectsPage/Projects";
import ProjectDetails from "./pages/ProjectsPage/ProjectDetails";
import EventDetails from "./pages/EventDetails/EventDetails";
import NotFound from "./pages/NotFound";
import SomethingWentWrong from "./pages/SomethingWentWrong";
import Homepage from "./pages/Homepage/Homepage";
import Teams from "./pages/Team/Teams";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ScrollToTop from "./components/ScrollToTop";

function RouteList() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:slug" element={<EventDetails />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/break" element={<SomethingWentWrong />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RouteList };
