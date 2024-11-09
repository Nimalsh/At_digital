import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", answer: "Lorem ipsum dolor sit tre ertkiyuoob..." },
    { question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?", answer: "Lorem ipsum dolor sit tre ertkiyuoob..." },
    { question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?", answer: "Lorem ipsum dolor sit tre ertkiyuoob..." }
  ];

  return (
    <section id="faq" className="py-8 md:py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-purple-800">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-sm overflow-hidden ${openIndex === index ? 'bg-purple-50' : 'bg-purple-50'}`}
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-base md:text-lg"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`flex-1 ${openIndex === index ? 'text-primary' : 'text-black'}`}>
                {faq.question}
              </span>
              <span className={`text-xl ${openIndex === index ? 'text-primary' : 'text-black'}`}>
                {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </button>
            {openIndex === index && (
              <p className="p-4 text-TextColorSubtle text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
