import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Large-Format Graphics | Wall Graphics & Window Displays | Avid Signs & Wraps",
  description: "Professional large-format graphics in Staten Island, NY. Wall graphics, window displays, floor graphics, and trade show displays for maximum impact.",
};

export default function LargeFormatPage() {
  return (
    <>
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Large-Format Graphics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make a bold statement with our large-format graphics. From wall murals to 
              trade show displays, we create impactful visuals that capture attention.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wall Graphics & Murals</h3>
              <p className="text-gray-600 mb-4">
                Transform blank walls into powerful brand statements. Custom wall graphics 
                and murals that create memorable environments.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom wall murals</li>
                <li>• Brand environment graphics</li>
                <li>• Removable wall vinyl</li>
                <li>• Architectural graphics</li>
                <li>• Interior/exterior options</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Window Graphics</h3>
              <p className="text-gray-600 mb-4">
                Eye-catching window displays that attract customers and provide privacy. 
                One-way vision options maintain visibility from inside.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Storefront window graphics</li>
                <li>• One-way vision film</li>
                <li>• Frosted glass effects</li>
                <li>• Promotional displays</li>
                <li>• Privacy solutions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🔴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Floor Graphics</h3>
              <p className="text-gray-600 mb-4">
                Durable floor graphics for wayfinding, promotions, and safety messaging. 
                Slip-resistant materials designed for heavy foot traffic.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Directional floor graphics</li>
                <li>• Promotional floor decals</li>
                <li>• Safety messaging</li>
                <li>• Social distancing markers</li>
                <li>• Anti-slip lamination</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🏤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trade Show Displays</h3>
              <p className="text-gray-600 mb-4">
                Professional trade show graphics that make your booth stand out. 
                Portable, reusable displays that travel well.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Backdrop displays</li>
                <li>• Banner stands</li>
                <li>• Table throws</li>
                <li>• Pop-up displays</li>
                <li>• Portable solutions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🏖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outdoor Graphics</h3>
              <p className="text-gray-600 mb-4">
                Weather-resistant outdoor graphics for buildings, fences, and structures. 
                UV-resistant materials that maintain color outdoors.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Building wraps</li>
                <li>• Fence graphics</li>
                <li>• Construction site graphics</li>
                <li>• Event backdrops</li>
                <li>• Weather-resistant materials</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4 text-center">🎢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specialty Graphics</h3>
              <p className="text-gray-600 mb-4">
                Custom solutions for unique applications. Specialty substrates and 
                finishes for demanding environments.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Textured surfaces</li>
                <li>• Metallic finishes</li>
                <li>• Reflective graphics</li>
                <li>• Fabric displays</li>
                <li>• Custom substrates</li>
              </ul>
            </div>
          </div>

          {/* Applications Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perfect Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🏢
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Retail Stores</h3>
                <p className="text-gray-600 text-sm">
                  Window displays, wall graphics, and promotional materials
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🏢
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Offices</h3>
                <p className="text-gray-600 text-sm">
                  Brand walls, conference room graphics, and wayfinding
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🏗️
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Construction</h3>
                <p className="text-gray-600 text-sm">
                  Site fencing graphics and safety messaging
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🎉
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Events</h3>
                <p className="text-gray-600 text-sm">
                  Backdrops, step-and-repeats, and promotional displays
                </p>
              </div>
            </div>
          </div>

          {/* Materials & Quality */}
          <div className="bg-white rounded-lg p-8 mb-16 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quality Materials & Printing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">High-Resolution Printing</h3>
                <p className="text-gray-600">
                  Up to 1440 DPI printing ensures crisp, vibrant graphics 
                  at any size.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">UV-Resistant Inks</h3>
                <p className="text-gray-600">
                  Solvent and latex inks provide superior fade resistance 
                  and longevity.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Versatile Substrates</h3>
                <p className="text-gray-600">
                  Wide range of materials including vinyl, fabric, 
                  mesh, and specialty options.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-8 max-w-2xl mx-auto text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Go Big?
              </h2>
              <p className="mb-6 text-purple-100">
                Let's discuss your large-format graphics project and create 
                something that makes a lasting impression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                  Get Free Quote
                </Link>
                <Link href="/work" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-medium transition-colors">
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