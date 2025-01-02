import { BrowserRouter, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Homepage from 'pages/Homepage/Homepage';
import AboutUs from '@/pages/AboutUs/AboutUs';
import EventsPage from 'pages/Events/EventsPage';
import Team from '@/pages/Teams';
import Projects from './pages/ProjectsPage/Projects';
import ProjectDetails from './pages/ProjectsPage/ProjectDetails';
import NotFound from './pages/NotFound';
import SomethingWentWrong from './pages/SomethingWentWrong';
=======
import Homepage from "pages/Homepage/Homepage";
import AboutUs from "pages/AboutUs";
import EventsPage from "pages/Events/EventsPage";
import Team from "@/pages/Teams";
import Projects from "./pages/ProjectsPage/Projects";
import ProjectDetails from "./pages/ProjectsPage/ProjectDetails";
import NotFound from "./pages/NotFound";
import SomethingWentWrong from "./pages/SomethingWentWrong";
import SignUp from "./pages/SignUp/App";
>>>>>>> 21321cceb6a341c1476c26cb96140245a929668f

function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:slug' element={<ProjectDetails />} />
        <Route path='/break' element={<SomethingWentWrong />} />
        <Route path='*' element={<NotFound />} />
=======
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/break" element={<SomethingWentWrong />} />
        <Route path="*" element={<NotFound />} />
>>>>>>> 21321cceb6a341c1476c26cb96140245a929668f
      </Routes>
    </BrowserRouter>
  );
}

export { RouteList };
