import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from 'pages/Homepage/Homepage';
import AboutUs from 'pages/AboutUs';
import Events from 'pages/Events';
import Team from '@/pages/Teams';
import Resources from 'pages/Resources';
import NotFound from './pages/NotFound';
import SomethingWentWrong from './pages/SomethingWentWrong';

function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/events' element={<Events />} />
        <Route path='/team' element={<Team />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/break' element={<SomethingWentWrong />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RouteList };
