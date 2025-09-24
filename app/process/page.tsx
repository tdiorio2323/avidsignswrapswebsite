import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Process | How We Work | Avid Signs & Wraps",
  description: "Learn about our proven 5-step process for custom signage projects. From initial survey to final installation, we ensure quality at every step.",
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Survey & Consultation",
      description: "We start with a comprehensive site survey and consultation to understand your needs, assess the location, and discuss your vision. This includes measuring spaces, evaluating electrical requirements, and reviewing local permit needs.",
      details: [
        "On-site visit and measurements",
        "Needs assessment and goal setting",
        "Location evaluation for optimal placement",
        "Permit research and requirements review"
      ],
      icon: "🔍"
    },
    {
      number: "02",
      title: "Design & Proof",
      description: "Our design team creates custom concepts based on your brand and requirements. We provide detailed proofs, 3D renderings when applicable, and work with you through revisions until the design is perfect.",
      details: [
        "Custom design creation",
        "3D renderings and mockups",
        "Color matching and brand compliance",
        "Client review and revision process"
      ],
      icon: "🎨"
    },
    {
      number: "03",
      title: "Fabrication",
      description: "Once the design is approved, we move to fabrication using premium materials and precision techniques. Our experienced craftspeople ensure every detail meets our quality standards before moving to the next phase.",
      details: [
        "Material sourcing and preparation",
        "Precision cutting and shaping",
        "Quality control inspections",
        "Custom fabrication techniques"
      ],
      icon: "🔨"
    },
    {
      number: "04",
      title: "Permits & Approvals",
      description: "We handle all necessary permits and approvals required for your signage installation. This includes submitting applications, coordinating with local authorities, and ensuring full compliance with codes and regulations.",
      details: [
        "Permit application submission",
        "Code compliance verification",
        "Authority coordination",
        "Approval documentation"
      ],
      icon: "📋"
    },
    {
      number: "05",
      title: "Professional Installation",
      description: "Our certified installers complete the project with precision and care. We ensure proper mounting, electrical connections (if applicable), and conduct final quality checks before project completion.",
      details: [
        "Professional installation team",
        "Proper mounting and securing",
        "Electrical work (if required)",
        "Final quality inspection and cleanup"
      ],
      icon: "⚙️"
    }
  ];

  return (
    <>
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic 5-step process to ensure your signage project 
              is completed on time, on budget, and exceeds your expectations.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-16 mb-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {step.number}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {step.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <div className="bg-gray-100 rounded-lg p-12 text-center">
                    <div className="text-8xl mb-4">{step.icon}</div>
                    <div className="text-4xl font-bold text-gray-300">{step.number}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Typical Project Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3-5
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Simple Signs</h3>
                <p className="text-gray-600">Basic vinyl signs and decals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1-2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Vehicle Wraps</h3>
                <p className="text-gray-600">Complete vehicle transformations (weeks)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2-4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Channel Letters</h3>
                <p className="text-gray-600">Illuminated signage projects (weeks)</p>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              *Timeline may vary based on complexity, permits, and weather conditions
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quality Assurance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Every Step is Monitored</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Design approval before fabrication
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Material quality inspections
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Pre-installation quality checks
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Final installation inspection
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Communication</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Regular progress updates
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Photo documentation of work
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Installation scheduling coordination
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Post-installation follow-up
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-blue-600 rounded-lg p-8 max-w-2xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="mb-6">
                Experience our proven process firsthand. Get a free consultation 
                and see how we can bring your signage vision to life.
              </p>
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-block">
                Start Your Project Today
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}