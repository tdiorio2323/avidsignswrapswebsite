import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Custom Signs | Interior & Exterior Signage | Avid Signs & Wraps",
  description: "Professional custom signs in Staten Island, NY. Channel letters, illuminated signs, ADA compliant signage, wayfinding, and banner solutions.",
};

export default function SignsPage() {
  return (
    <>
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Custom Signs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From channel letters to wayfinding systems, we create professional signage 
              that gets your business noticed and helps customers find you.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Channel Letters</h3>
              <p className="text-gray-600 mb-4">
                Illuminated dimensional letters that make your business stand out day and night. 
                Energy-efficient LED lighting with custom colors and finishes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Front-lit and back-lit options</li>
                <li>• Aluminum construction</li>
                <li>• LED lighting systems</li>
                <li>• Custom colors and fonts</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exterior Signage</h3>
              <p className="text-gray-600 mb-4">
                Durable outdoor signs built to withstand weather while maintaining 
                professional appearance. Monument signs, pole signs, and building-mounted options.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Monument signs</li>
                <li>• Pole signs</li>
                <li>• Building-mounted signs</li>
                <li>• Weather-resistant materials</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🏪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interior Signage</h3>
              <p className="text-gray-600 mb-4">
                Professional interior signs for lobbies, offices, and retail spaces. 
                From reception area logos to directional signage.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Lobby signs and logos</li>
                <li>• Directional signage</li>
                <li>• Office door signs</li>
                <li>• Retail displays</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">♿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ADA Compliant Signs</h3>
              <p className="text-gray-600 mb-4">
                Fully compliant ADA signage including braille, proper contrast ratios, 
                and mounting heights. Required for commercial buildings.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Braille signage</li>
                <li>• Tactile elements</li>
                <li>• Proper contrast ratios</li>
                <li>• Code-compliant mounting</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🗺️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wayfinding Systems</h3>
              <p className="text-gray-600 mb-4">
                Complete wayfinding solutions for complex buildings and campuses. 
                Clear, consistent signage that guides visitors efficiently.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Directory signs</li>
                <li>• Directional arrows</li>
                <li>• Floor plans</li>
                <li>• Consistent design systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🏳️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Banners & Displays</h3>
              <p className="text-gray-600 mb-4">
                High-quality banners for events, promotions, and temporary signage needs. 
                Indoor and outdoor options with various mounting systems.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Vinyl banners</li>
                <li>• Mesh banners</li>
                <li>• Retractable displays</li>
                <li>• Event signage</li>
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Sign Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We assess your needs, location, and branding requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">
                  Custom design concepts and 3D renderings for your approval.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fabrication</h3>
                <p className="text-gray-600">
                  Precision manufacturing using premium materials and techniques.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Installation</h3>
                <p className="text-gray-600">
                  Professional installation with permits and code compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready for Your Custom Sign?
              </h2>
              <p className="text-gray-600 mb-6">
                Get a free consultation and quote for your signage project. 
                We'll help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get Free Quote
                </Link>
                <Link href="/work" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}