import Home from './pages/Home';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Destination from './pages/Destination';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

import './styles/main.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/crew' exact element={<Crew />} />
        <Route path='/technology' exact element={<Technology />} />
        <Route path='/destination' exact element={<Destination />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;