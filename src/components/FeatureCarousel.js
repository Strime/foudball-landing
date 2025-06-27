import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaChartLine, FaCalendarAlt, FaFutbol } from 'react-icons/fa';
import teamScreenshot from '../images/team-screenshot.png';
import seasonScreenshot from '../images/season-screenshot.png';
import matchesScreenshot from '../images/matches-screenshot.png';
import matchScreenshot from '../images/match-screenshot.png';

const PhoneMockup = ({ image, isActive }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.7 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={`relative mx-auto ${isActive ? 'z-10' : 'z-0'}`}
    style={{ width: '280px', height: '560px' }}
  >
    {/* Phone Frame */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-[3rem] p-2 shadow-2xl">
      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
        
        {/* Screenshot */}
        <img 
          src={image} 
          alt="App screenshot" 
          className="w-full h-full object-cover"
        />
        
        {/* Screen overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-black/5 pointer-events-none"></div>
      </div>
      
      {/* Phone highlights */}
      <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm"></div>
    </div>
  </motion.div>
);

const FeatureCard = ({ image, title, description, icon: Icon, isActive, onClick }) => (
  <motion.div 
    onClick={onClick}
    whileHover={{ y: -5 }}
    className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
      isActive 
        ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl' 
        : 'bg-white/60 backdrop-blur-md border border-white/30 hover:bg-white/80'
    }`}
  >
    <div className="flex items-center mb-4">
      <div className={`p-3 rounded-xl mr-4 ${
        isActive 
          ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' 
          : 'bg-gray-100 text-gray-600'
      }`}>
        <Icon className="text-xl" />
      </div>
      <h3 className={`text-xl font-bold ${
        isActive 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
          : 'text-gray-800'
      }`}>
        {title}
      </h3>
    </div>
    <p className={`text-base leading-relaxed ${
      isActive ? 'text-gray-700' : 'text-gray-600'
    }`}>
      {description}
    </p>
  </motion.div>
);

const FeaturesCarousel = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      image: teamScreenshot,
      title: "Gère ton équipe facilement",
      description: "Crée et administre tes équipes en quelques clics. Ajoute des joueurs, assigne des capitaines et organise ton groupe pour des matchs mémorables.",
      icon: FaUsers
    },
    {
      image: seasonScreenshot,
      title: "Analyse ta saison",
      description: "Suis les performances de ton équipe avec des statistiques détaillées. Visualise tes victoires, défaites et l'évolution de tes joueurs.",
      icon: FaChartLine
    },
    {
      image: matchesScreenshot,
      title: "Planifie tes matchs",
      description: "Organise et programme tes rencontres sportives. Gère les disponibilités de chacun et trouve le créneau parfait pour tous.",
      icon: FaCalendarAlt
    },
    {
      image: matchScreenshot,
      title: "Feuille de match interactive",
      description: "Consulte toutes les informations importantes d'un match en temps réel. Score, compositions d'équipes et statistiques à portée de main.",
      icon: FaFutbol
    }
  ];

  return (
    <section id="features" className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
        >
          Découvre l'application
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Une interface intuitive pensée pour les passionnés de football
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockups */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <PhoneMockup 
                key={activeFeature}
                image={features[activeFeature].image} 
                isActive={true}
              />
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;