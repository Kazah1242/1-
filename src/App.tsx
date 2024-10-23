import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Themes from './pages/Themes';
import Themes_1 from './pages/Themes_1';
import Themes_2 from './pages/Themes_2';
import Themes_3 from './pages/Themes_3';
import Themes_4 from './pages/Themes_4';
import './styles/index.scss';

const App: React.FC = () => {
  useEffect(() => {
    window.Telegram.WebApp.ready();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/themes1" element={<Themes_1 />} />
        <Route path="/themes2" element={<Themes_2/>} />
        <Route path="/themes3" element={<Themes_3 />} />
        <Route path="/themes4" element={<Themes_4 />} />
      </Routes>
    </Router>
  );
};

export default App;
