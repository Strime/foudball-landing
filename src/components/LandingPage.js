import React, { useState } from 'react';
import { motion } from 'framer-motion';
import footballerIcon from '../images/foudball.png';
import FeaturesCarousel from './FeatureCarousel';
import { FaApple, FaGooglePlay, FaBars, FaTimes } from 'react-icons/fa';
import HeroSection from './HeroSection';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 font-sans">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="bg-white/90 backdrop-blur-md border-b border-white/20 text-gray-900 sticky top-0 z-50 shadow-lg"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center"
            >
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Fou d'Ball</span>
            </motion.div>
            
            {/* Desktop Menu */}
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="hidden md:flex items-center space-x-8"
            >
              <li>
                <a href="#features" className="relative group py-2 px-4 rounded-full hover:bg-blue-50 transition-all duration-300">
                  <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Fonctionnalités</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="relative group py-2 px-4 rounded-full hover:bg-purple-50 transition-all duration-300">
                  <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">Témoignages</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </a>
              </li>
              <li>
                <motion.a 
                  href="#download" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Télécharger
                </motion.a>
              </li>
            </motion.ul>
            
            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </motion.button>
          </div>
          
          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2">
              <a href="#features" className="block py-3 px-4 rounded-lg hover:bg-blue-50 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300"
                 onClick={() => setIsMenuOpen(false)}>
                Fonctionnalités
              </a>
              <a href="#testimonials" className="block py-3 px-4 rounded-lg hover:bg-purple-50 font-medium text-gray-700 hover:text-purple-600 transition-all duration-300"
                 onClick={() => setIsMenuOpen(false)}>
                Témoignages
              </a>
              <a href="#download" className="block py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center mt-4 shadow-lg"
                 onClick={() => setIsMenuOpen(false)}>
                Télécharger
              </a>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      <main>
        <HeroSection/>

        <FeaturesCarousel />

        <section id="testimonials" className="py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50/50">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
            >
              Ce que disent nos utilisateurs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard 
                quote="La meilleure appli pour l'organisation des matchs entre amis/collègues. Utilisation simple et efficace ! Un must have pour qui joue au foot"
                author="Paolo Z."
              />
              <TestimonialCard 
                quote="Parfait pour planifier ses match entre amis !!"
                author="Christophe A."
              />
              <TestimonialCard 
                quote="On peut enfin lâcher doodle !!"
                author="Thomas C."
              />
            </div>
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          id="download" 
          className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-32"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Prêt à jouer ?</h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">Télécharge Fou d'Ball maintenant et commence à organiser tes matchs !</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://apps.apple.com/fr/app/fou-dball/id1506943262" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/80 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 flex items-center shadow-xl border border-white/10"
              >
                <FaApple className="mr-2 text-2xl" />
                Télécharger sur l'App Store
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.strime.fou_dball&hl=fr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/90 backdrop-blur-md text-blue-600 px-8 py-4 rounded-full hover:bg-white transition-all duration-300 flex items-center shadow-xl border border-white/20"
              >
                <FaGooglePlay className="mr-2 text-2xl" />
                Disponible sur Google Play
              </motion.a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

const TestimonialCard = ({ quote, author }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300"
  >
    <div className="text-4xl text-blue-500/30 mb-4">"</div>
    <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">{quote}</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
        <span className="text-white font-bold text-lg">{author.charAt(0)}</span>
      </div>
      <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{author}</p>
    </div>
  </motion.div>
);

export default LandingPage;