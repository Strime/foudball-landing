import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import footballerIcon from './images/foudball.png';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>

        <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src={footballerIcon} alt="Fou d'Ball logo" className="h-12 w-12 mb-2" />
              <p className="text-sm">© 2023 Fou d'Ball. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-yellow-300 transition duration-300">Politique de confidentialité</a>
              <a href="https://www.gaetan-s.me" class="hover:text-yellow-300 transition duration-300">À propos du développeur</a>
              </div>
          </div>
        </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;