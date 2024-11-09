import React from 'react';
import heroImage from '../assets/images/hero.png';

const Hero = () => (
  <section
    className="relative text-center bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div
      className="absolute left-0 bottom-0 mx-auto px-4 py-3 max-w-lg sm:left-0 sm:bottom-0 lg:left-12 lg:bottom-12 lg:max-w-lg bg-opacity-60 text-left sm:max-w-full"
      style={{
        background: 'linear-gradient(to right, #48BB78, #26ceef)',
        color: '#E2F2FE',
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
      </h2>
      <button className="mt-2 mb-2 bg-secondary text-white font-semibold py-1.5 px-8 hover:bg-opacity-90">
        Get Free Consultation
      </button>
    </div>
  </section>
);

export default Hero;

