import React from 'react';
import heroImage from '../assets/images/hero.png';


const Hero = () => (
  <section
    className="relative text-center bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div
  className="absolute bottom-9 left-12 bg-opacity-60 px-8 py-3  max-w-lg  lg:mx-0 text-left"
  style={{
    background: 'linear-gradient(to right, #48BB78, #26ceef)',
    color: '#E2F2FE',
  }}
>
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
  </h2>
  <button className="mt-2 mb-2 bg-secondary text-white font-semibold py-1.5 px-8  hover:bg-opacity-90">
    Get Free Consultation
  </button>
</div>

  </section>
);

export default Hero;
