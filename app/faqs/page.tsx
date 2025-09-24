"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to complete a signage project?",
      answer: "Timeline varies by project complexity. Simple vinyl signs take 3-5 business days, channel letters typically take 2-3 weeks, and vehicle wraps require 5-7 business days. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Do you provide design services or do I need my own artwork?",
      answer: "We offer complete design services! Our team can create custom designs from scratch or work with your existing brand assets. We'll provide proofs and revisions until you're completely satisfied."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire Tri-State area including Staten Island, all NYC boroughs (Brooklyn, Manhattan, Queens, Bronx), North New Jersey, Long Island, and parts of Connecticut."
    },
    {
      question: "Do you handle permits for outdoor signage?",
      answer: "Yes! We handle all necessary permits and ensure code compliance for outdoor signage installations. This is included in our service to make the process seamless for you."
    },
    {
      question: "What materials do you use for vehicle wraps?",
      answer: "We use premium 3M vinyl (IJ180Cv3 with 8518 laminate) that comes with a 7-year warranty. This material is designed for long-term durability and maintains vibrant colors."
    },
    {
      question: "Can vehicle wraps damage my paint?",
      answer: "No, our professional-grade vinyl actually protects your paint. When properly installed and removed by professionals, wraps leave no residue and can even preserve your vehicle's original paint."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Absolutely! We provide comprehensive warranties: 7 years on vehicle wraps, 5 years on outdoor signage, and 3 years on indoor graphics. All warranties cover materials and workmanship."
    },
    {
      question: "How much does custom signage cost?",
      answer: "Costs vary based on size, materials, complexity, and installation requirements. We provide free consultations and detailed quotes. Contact us for a personalized estimate for your project."
    },
    {
      question: "Can you match my existing brand colors exactly?",
      answer: "Yes, we use color matching systems to ensure precise color reproduction. We can match Pantone colors, existing signage, or work from your brand guidelines to maintain consistency."
    },
    {
      question: "Do you install signs or just manufacture them?",
      answer: "We provide complete turnkey service including design, manufacturing, and professional installation. Our certified installers ensure proper mounting and compliance with local codes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our signage services, 
              materials, and process.
            </p>
          </div>

          {/* FAQs */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="mb-6">
              Can't find the answer you're looking for? Get in touch with our team 
              for personalized assistance with your signage project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="mailto:ricky.avidsign@gmail.com"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}