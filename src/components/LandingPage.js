import React from 'react';
import { motion } from 'framer-motion';
import footballerIcon from '../images/foudball.png';
import FeaturesCarousel from './FeatureCarousel';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import HeroSection from './HeroSection';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="bg-blue-600 text-white sticky top-0 z-50"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center"
          >
            <img src={footballerIcon} alt="Fou d'Ball logo" className="h-10 w-10 mr-2" />
            <span className="font-bold text-2xl">Fou d'Ball</span>
          </motion.div>
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-6"
          >
            <li><a href="#features" className="hover:text-yellow-300 transition duration-300">Fonctionnalités</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-300 transition duration-300">Témoignages</a></li>
            <li><a href="#download" className="hover:text-yellow-300 transition duration-300">Télécharger</a></li>
          </motion.ul>
        </nav>
      </motion.header>

      <main>
        <HeroSection/>

        <FeaturesCarousel />

        <section id="testimonials" className="py-24 bg-gray-100">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Ce que disent nos utilisateurs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          className="bg-blue-600 text-white py-24"
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à jouer ?</h2>
            <p className="text-xl mb-10">Télécharge Fou d'Ball maintenant et commence à organiser tes matchs !</p>
            <div className="flex justify-center space-x-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://apps.apple.com/fr/app/fou-dball/id1506943262" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 flex items-center"
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
                className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 flex items-center"
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
    className="bg-white p-8 rounded-lg shadow-lg"
  >
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <p className="font-semibold text-blue-600">{author}</p>
  </motion.div>
);

export default LandingPage;