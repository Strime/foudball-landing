import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Assurez-vous d'importer les styles CSS de react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import teamScreenshot from '../images/team-screenshot.png';
import seasonScreenshot from '../images/season-screenshot.png';
import matchesScreenshot from '../images/matches-screenshot.png';
import matchScreenshot from '../images/match-screenshot.png';

const FeatureCard = ({ image, title, description }) => (
  <div className="px-4 flex flex-col h-full">
    <div className="relative pt-[56.25%] mb-4">
      <img 
        src={image} 
        alt={title} 
        className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
      />
    </div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const PrevArrow = (props) => (
  <button
    {...props}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
  >
    <FaChevronLeft className="w-6 h-6 text-gray-800" />
  </button>
);

const NextArrow = (props) => (
  <button
    {...props}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
  >
    <FaChevronRight className="w-6 h-6 text-gray-800" />
  </button>
);

const FeaturesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Fonctionnalités</h2>
        <Slider {...settings}>
          <FeatureCard
            image={teamScreenshot}
            title="Gère ton équipe en un clic"
            description="Crée et gère facilement tes équipes avec leurs capitaines."
          />
          <FeatureCard
            image={seasonScreenshot}
            title="Analyse ta saison en un coup d'œil"
            description="Visualise les performances de ton équipe tout au long de la saison."
          />
          <FeatureCard
            image={matchesScreenshot}
            title="Organise tes matchs simplement"
            description="Planifie et gère tes matchs avec facilité."
          />
          <FeatureCard
            image={matchScreenshot}
            title="Organise tes matchs simplement"
            description="Visualise d'un coup d'oeil la feulle de match."
          />
        </Slider>
      </div>
    </section>
  );
};

export default FeaturesCarousel;