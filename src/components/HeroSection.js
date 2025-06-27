import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaDownload, FaUsers } from 'react-icons/fa';
import football1 from '../images/account.svg';
import football2 from '../images/match.svg';
import football3 from '../images/team.svg';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-purple-500/20"></div>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        </pattern>
        <radialGradient id="spotlight" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#small-grid)" />
      <rect width="100%" height="100%" fill="url(#spotlight)" />
      <motion.image
        href={football1}
        x="10%"
        y="20%"
        width="100"
        height="100"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.image
        href={football2}
        x="70%"
        y="10%"
        width="120"
        height="120"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      <motion.image
        href={football3}
        x="40%"
        y="70%"
        width="150"
        height="150"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </svg>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-40 overflow-hidden min-h-screen flex items-center">
      <AnimatedBackground />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight"
        >
          Fou d'Ball
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl mb-12 text-blue-100 font-light tracking-wide max-w-4xl mx-auto"
        >
          Ton coach de poche pour une saison réussie
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-xl"
          >
            <FaDownload className="text-3xl mb-3 mx-auto text-blue-200" />
            <div className="text-2xl font-bold text-white mb-1">1K+</div>
            <div className="text-blue-200 text-sm">Téléchargements</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-xl"
          >
            <div className="flex justify-center items-center mb-3">
              <FaStar className="text-yellow-300 text-2xl" />
              <span className="text-2xl font-bold text-white ml-2">4.9</span>
            </div>
            <div className="text-blue-200 text-sm">Note moyenne</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 shadow-xl"
          >
            <FaUsers className="text-3xl mb-3 mx-auto text-green-300" />
            <div className="text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-blue-200 text-sm">Matchs créés</div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#download"
            className="bg-white/15 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-white/25 transition-all duration-300 flex items-center gap-3"
          >
            <FaDownload className="text-lg" />
            Télécharger l'app
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#features"
            className="text-white/80 hover:text-white font-medium transition-colors duration-300 flex items-center gap-2"
          >
            Découvrir les fonctionnalités
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;