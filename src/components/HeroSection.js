import React from 'react';
import { motion } from 'framer-motion';
import football1 from '../images/account.svg';
import football2 from '../images/match.svg';
import football3 from '../images/team.svg';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"></div>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#small-grid)" />
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
    <section className="relative bg-blue-600 text-white py-32 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-bold mb-6"
        >
          Fou d'Ball
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl mb-10"
        >
          Ton coach de poche pour une saison réussie
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;