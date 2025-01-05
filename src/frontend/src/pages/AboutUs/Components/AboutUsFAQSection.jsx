import { useState } from "react";
import { faq } from "../Data/PageData";

export default function AboutUsFAQSection() {
    const [faqStates, setFaqStates] = useState([false, false, false]);
    const toggleFaq = (index) => {
        setFaqStates((prev) =>
            prev.map((state, i) => (i === index ? !state : state)),
        );
    };

    return (
        <section id="faq" className="py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faq.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-300 overflow-hidden
                  ${faqStates[index] ? "bg-blue-50 dark:bg-blue-900" : "bg-white dark:bg-gray-700"}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold text-lg text-gray-800 dark:text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 dark:text-white
                    ${faqStates[index] ? "rotate-180" : "rotate-0"}`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 px-6
                  ${faqStates[index] ? "max-h-40 pb-6" : "max-h-0"}`}
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}