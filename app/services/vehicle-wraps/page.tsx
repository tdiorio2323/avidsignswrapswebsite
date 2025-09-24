import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Vehicle Wraps | Car, Truck & Fleet Wraps | Avid Signs & Wraps",
  description: "Professional vehicle wraps in Staten Island, NY. Full and partial wraps for cars, trucks, vans, and fleets with premium 3M materials and warranties.",
};

export default function VehicleWrapsPage() {
  return (
    <>
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vehicle Wraps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your vehicle into a mobile billboard with our premium vehicle wraps. 
              Professional installation with industry-leading materials and warranties.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full Vehicle Wraps</h3>
              <p className="text-gray-600 mb-4">
                Complete vehicle transformation covering 100% of your vehicle's surface. 
                Maximum impact and brand exposure with seamless, professional installation.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• 100% surface coverage</li>
                <li>• Complete brand transformation</li>
                <li>• Paint protection benefits</li>
                <li>• Maximum advertising impact</li>
                <li>• Removable without damage</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>7-Year Warranty</strong> on materials and workmanship
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partial Vehicle Wraps</h3>
              <p className="text-gray-600 mb-4">
                Strategic placement on key areas like doors, hood, or rear panels. 
                Cost-effective solution with professional impact.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Door graphics</li>
                <li>• Hood and roof wraps</li>
                <li>• Rear window graphics</li>
                <li>• Custom partial coverage</li>
                <li>• Budget-friendly option</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Cost-Effective</strong> alternative to full wraps
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🚛</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fleet Wraps</h3>
              <p className="text-gray-600 mb-4">
                Consistent branding across your entire fleet. Volume pricing available 
                for multiple vehicles with coordinated designs.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Consistent fleet branding</li>
                <li>• Volume pricing discounts</li>
                <li>• Coordinated scheduling</li>
                <li>• Brand consistency</li>
                <li>• Fleet management support</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Volume Discounts</strong> for 3+ vehicles
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🏎️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Vehicles</h3>
              <p className="text-gray-600 mb-4">
                Specialized wraps for trucks, vans, trailers, and specialty vehicles. 
                Built to withstand commercial use and weather conditions.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Box trucks and trailers</li>
                <li>• Service vans</li>
                <li>• Delivery vehicles</li>
                <li>• Construction equipment</li>
                <li>• Food trucks</li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Heavy-Duty</strong> materials for commercial use
                </p>
              </div>
            </div>
          </div>

          {/* Materials & Warranty */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Premium Materials & Warranty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3M</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3M Premium Vinyl</h3>
                <p className="text-gray-600">
                  Industry-leading 3M IJ180Cv3 vinyl with 8518 laminate for 
                  maximum durability and color retention.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">7-Year Warranty</h3>
                <p className="text-gray-600">
                  Comprehensive warranty covering materials, workmanship, 
                  and color fade protection.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">UV Protection</h3>
                <p className="text-gray-600">
                  Advanced UV protection prevents fading and maintains 
                  vibrant colors for years.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-lg p-8 mb-16 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Wrap Installation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600">
                  Vehicle assessment and design consultation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">
                  Custom wrap design and proof approval.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Production</h3>
                <p className="text-gray-600">
                  Precision printing and material preparation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Preparation</h3>
                <p className="text-gray-600">
                  Vehicle cleaning and surface preparation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  5
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Installation</h3>
                <p className="text-gray-600">
                  Professional wrap application and quality check.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 max-w-2xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Transform Your Vehicle Today
              </h2>
              <p className="mb-6 text-blue-100">
                Get a free consultation and quote for your vehicle wrap project. 
                Turn your vehicle into a mobile advertisement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                  Get Free Quote
                </Link>
                <Link href="/work" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
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