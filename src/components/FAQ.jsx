import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit tre ertkiyuoob. Lorem ipsum dolor sit tre ertkiyuoob.Lorem ipsum dolor sit tre ertkiyuoob.Lorem ipsum dolor sit tre ertkiyuoob",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit tre ertkiyuoob.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit tre ertkiyuoob. Phasellus nec enim non orci aliquet congue.",
    },
  ];

  return (
    <section id="faq" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-Analogous1">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-purple-50 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-Analogous1 font-semibold text-lg"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="p-4 text-TextColorSubtle  ">
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
