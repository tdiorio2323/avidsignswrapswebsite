import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Service Areas | Tri-State Signage Services | Avid Signs & Wraps",
  description: "Professional signage services across Staten Island, NYC, Brooklyn, Manhattan, Queens, Bronx, New Jersey, Long Island, and Connecticut.",
};

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      area: "Staten Island",
      description: "Our home base - comprehensive signage services across all neighborhoods",
      highlights: ["Local expertise", "Same-day consultations", "Quick response times"],
      icon: "🏠"
    },
    {
      area: "Brooklyn",
      description: "Full-service signage for businesses throughout Brooklyn's diverse communities",
      highlights: ["All neighborhoods", "Commercial districts", "Residential areas"],
      icon: "🌉"
    },
    {
      area: "Manhattan",
      description: "Premium signage solutions for NYC's business capital",
      highlights: ["Midtown & Downtown", "Financial District", "Commercial spaces"],
      icon: "🏢"
    },
    {
      area: "Queens",
      description: "Serving Queens' vibrant business communities with quality signage",
      highlights: ["Flushing", "Long Island City", "Astoria & beyond"],
      icon: "🏙️"
    },
    {
      area: "The Bronx",
      description: "Professional signage services throughout the Bronx",
      highlights: ["South Bronx", "Commercial corridors", "Industrial areas"],
      icon: "🏭"
    },
    {
      area: "North New Jersey",
      description: "Extended service to Northern NJ business communities",
      highlights: ["Jersey City", "Newark area", "Commercial zones"],
      icon: "🌊"
    },
    {
      area: "Long Island",
      description: "Quality signage services for Long Island businesses",
      highlights: ["Nassau County", "Suffolk County", "Commercial districts"],
      icon: "🏖️"
    },
    {
      area: "Connecticut",
      description: "Select areas of Connecticut - contact us for availability",
      highlights: ["Fairfield County", "Border communities", "By consultation"],
      icon: "🌲"
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
              Our Service Areas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly serving businesses across the Tri-State area with professional 
              signage solutions, from our home base in Staten Island.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {area.area}
                </h3>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  {area.description}
                </p>
                <div className="space-y-2">
                  {area.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Coverage Details */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Complete Coverage Across the Tri-State
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">New York</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Staten Island</span>
                    <span className="text-green-600 font-semibold">Full Service</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Brooklyn</span>
                    <span className="text-green-600 font-semibold">Full Service</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Manhattan</span>
                    <span className="text-green-600 font-semibold">Full Service</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Queens</span>
                    <span className="text-green-600 font-semibold">Full Service</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">The Bronx</span>
                    <span className="text-green-600 font-semibold">Full Service</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Long Island</span>
                    <span className="text-blue-600 font-semibold">Available</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">New Jersey & Connecticut</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Northern NJ</span>
                    <span className="text-blue-600 font-semibold">Available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Jersey City</span>
                    <span className="text-blue-600 font-semibold">Available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Newark Area</span>
                    <span className="text-blue-600 font-semibold">Available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Fairfield County, CT</span>
                    <span className="text-blue-600 font-semibold">Available</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <strong className="text-green-600">Full Service:</strong> Complete design, fabrication, and installation services<br/>
                <strong className="text-blue-600">Available:</strong> Service available with possible travel charges - contact for details
              </p>
            </div>
          </div>

          {/* Service Commitment */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Service Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h3>
                <p className="text-gray-600">
                  Same high-quality materials and workmanship regardless of location. 
                  We maintain consistent standards across all service areas.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Installation</h3>
                <p className="text-gray-600">
                  Certified installers familiar with local codes and requirements. 
                  We handle permits and ensure compliance in every jurisdiction.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Local Support</h3>
                <p className="text-gray-600">
                  Dedicated support team familiar with each market. We understand 
                  local business needs and community requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Serving Your Area
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to discuss your signage project? We're here to serve businesses 
              throughout the Tri-State area with the same commitment to quality and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Get Free Consultation
              </Link>
              <a href="mailto:ricky.avidsign@gmail.com" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Email Us Today
              </a>
            </div>
            <p className="text-blue-200 text-sm">
              Questions about service in your area? Contact us for availability and scheduling.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}