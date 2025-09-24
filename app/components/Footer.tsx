import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold">AVID</span>
              <div className="text-sm text-gray-300 leading-tight">
                SIGNS • GRAPHICS
              </div>
              <div className="text-sm text-gray-300 italic mt-1">
                Vehicle Wraps
              </div>
            </div>

            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-white">Avid Signs & Wraps</p>
              <p>32 Carlin Street</p>
              <p>Staten Island, NY</p>
              <p>
                <a
                  href="mailto:ricky.avidsign@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  ricky.avidsign@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/signs" className="hover:text-blue-400 transition-colors">
                  Custom Signs
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle-wraps" className="hover:text-blue-400 transition-colors">
                  Vehicle Wraps
                </Link>
              </li>
              <li>
                <Link href="/services/large-format" className="hover:text-blue-400 transition-colors">
                  Large-Format Graphics
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/process" className="hover:text-blue-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-blue-400 transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-blue-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Avid Signs & Wraps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}