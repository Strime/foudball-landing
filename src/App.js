import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaExternalLinkAlt, FaHeart } from 'react-icons/fa';
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

        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Logo et description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img src={footballerIcon} alt="Fou d'Ball logo" className="h-14 w-14 mr-4" />
                <span className="font-bold text-3xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">Fou d'Ball</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                L'application qui révolutionne l'organisation de tes matchs de football entre amis.
              </p>
              <div className="flex items-center justify-center lg:justify-start text-gray-400">
                <span>Fait </span>
                <span>par Gaëtan</span>
              </div>
            </motion.div>
            
            {/* Liens rapides */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Liens rapides</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center lg:justify-start group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Fonctionnalités</span>
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center lg:justify-start group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Témoignages</span>
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center lg:justify-start group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Politique de confidentialité</span>
                  </a>
                </li>
              </ul>
            </motion.div>
            
            {/* Contact et réseaux sociaux */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="font-bold text-xl mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Connectons-nous</h3>
              <div className="space-y-4">
                <motion.a 
                  href="https://www.linkedin.com/in/gaetan-sancassani/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center justify-center lg:justify-start text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                >
                  <FaLinkedin className="text-2xl mr-3 group-hover:text-blue-500 transition-colors duration-300" />
                  <span>LinkedIn</span>
                  <FaExternalLinkAlt className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                
                <motion.a 
                  href="https://www.malt.fr/profile/gaetansancassani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center justify-center lg:justify-start text-gray-300 hover:text-orange-400 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 mr-3 flex items-center justify-center bg-orange-500 rounded text-white font-bold text-sm group-hover:bg-orange-400 transition-colors duration-300">
                    M
                  </div>
                  <span>Malt</span>
                  <FaExternalLinkAlt className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                
                <motion.a 
                  href="https://www.gaetan-s.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center justify-center lg:justify-start text-gray-300 hover:text-green-400 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 mr-3 flex items-center justify-center bg-green-500 rounded text-white font-bold text-sm group-hover:bg-green-400 transition-colors duration-300">
                    G
                  </div>
                  <span>Portfolio</span>
                  <FaExternalLinkAlt className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Séparateur et copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                © 2025 Fou d'Ball. Tous droits réservés.
              </p>
              <div className="flex items-center text-gray-400">
                <span className="text-sm">Version 1.1.0</span>
                <span className="mx-2">•</span>
                <span className="text-sm">Dernière mise à jour: Juillet 2025</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;