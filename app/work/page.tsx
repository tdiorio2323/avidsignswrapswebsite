import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import projects from "../data/projects.json";

export const metadata = {
  title: "Our Work | Avid Signs & Wraps Portfolio",
  description: "View our portfolio of custom signs, vehicle wraps, and large-format graphics across Staten Island and the Tri-State area.",
};

export default function WorkPage() {
  return (
    <>
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom signage to complete vehicle wraps, explore our portfolio of professional
              installations across the Tri-State area.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">
                        {project.category === "Custom Signs" && "🏪"}
                        {project.category === "Vehicle Wraps" && "🚐"}
                        {project.category === "Wayfinding" && "🗺️"}
                      </div>
                      <p className="text-sm">Project Image</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div>
                      <span className="font-medium">Client:</span> {project.client}
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> {project.location}
                    </div>
                    <div>
                      <span className="font-medium">Materials:</span> {project.materials}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready for Your Project?
              </h2>
              <p className="text-gray-600 mb-6">
                Let's discuss your signage needs and create something amazing together.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Your Quote
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}