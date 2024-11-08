import React from 'react';
import image1 from '../assets/images/image_1.png';
import image2 from '../assets/images/image_2.png';

const services = [
  {
    title: "Digital Strategy Consulting",
    description: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component we master has a function and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
    icon: image2
  },
  {
    title: "Web & Mobile App Development",
    description: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks with tailor content and engagement methods to respond to different interactions by your potential customers who interact with your business online.",
    icon: image1
  }
  
];

const Services = () => (
  <section id="services" className="py-12 bg-gray-50 text-center">
    <div className="max-w-6xl mx-auto grid gap-12 px-4">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center p-12  bg-white ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
            <img
              src={service.icon}
              alt={service.title}
              className="md:mr-20"  // Add right margin to separate the image and text
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <button className="bg-secondary hover:bg-opacity-90 text-white py-2 px-6 rounded-md font-medium">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;

