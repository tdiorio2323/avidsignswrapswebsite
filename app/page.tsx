import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Signs, Wraps, and Large-Format Graphics that{" "}
                <span className="text-blue-600">Get Noticed</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Design, fabrication, and professional installation services across the Tri-State area.
                From custom signage to full vehicle wraps, we bring your brand to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get a Quote
                </Link>
                <Link href="/work" className="btn-secondary text-lg px-8 py-4">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Signage Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From concept to installation, we deliver high-quality signage that elevates your brand
                and drives business results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Custom Signs */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <div className="text-4xl mb-4">🏪</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Signs</h3>
                  <p className="text-gray-600">
                    Channel letters, illuminated signs, ADA compliant signage, and wayfinding solutions.
                  </p>
                </div>
                <Link href="/services/signs" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>

              {/* Vehicle Wraps */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <div className="text-4xl mb-4">🚐</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vehicle Wraps</h3>
                  <p className="text-gray-600">
                    Full and partial wraps for cars, trucks, vans, and fleets with premium materials.
                  </p>
                </div>
                <Link href="/services/vehicle-wraps" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>

              {/* Large Format */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <div className="text-4xl mb-4">🖼️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Large-Format Graphics</h3>
                  <p className="text-gray-600">
                    Wall graphics, window displays, floor graphics, and trade show displays.
                  </p>
                </div>
                <Link href="/services/large-format" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Avid Signs & Wraps?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Professional Design & Installation</h3>
                      <p className="text-gray-600">Expert design services and precision installation by experienced professionals.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Premium Materials</h3>
                      <p className="text-gray-600">High-quality materials that withstand weather and maintain vibrant colors.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Local Tri-State Service</h3>
                      <p className="text-gray-600">Serving Staten Island, NYC, New Jersey, and parts of Connecticut.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Get a free consultation and quote for your signage project. We'll work with you
                  from concept to completion.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    32 Carlin Street, Staten Island, NY
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    ricky.avidsign@gmail.com
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Get Your Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
