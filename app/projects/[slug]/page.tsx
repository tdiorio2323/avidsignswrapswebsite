import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import projects from "../../data/projects.json";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Avid Signs & Wraps Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-gray-700">Work</Link>
            <span>/</span>
            <span className="text-gray-900">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">
                      {project.category === "Custom Signs" && "🏪"}
                      {project.category === "Vehicle Wraps" && "🚐"}
                      {project.category === "Wayfinding" && "🗺️"}
                    </div>
                    <p>Main Project Image</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="text-2xl mb-2">📷</div>
                        <p className="text-xs">Additional Image {index + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Project Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Client</h3>
                    <p className="mt-1 text-gray-900">{project.client}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Location</h3>
                    <p className="mt-1 text-gray-900">{project.location}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Materials</h3>
                    <p className="mt-1 text-gray-900">{project.materials}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Dimensions</h3>
                    <p className="mt-1 text-gray-900">{project.dimensions}</p>
                  </div>

                  <div className="sm:col-span-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Completion Date</h3>
                    <p className="mt-1 text-gray-900">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Like What You See?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get a free consultation for your signage project. We'll work with you to create
                    something amazing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary text-center">
                      Get Your Quote
                    </Link>
                    <Link href="/work" className="btn-secondary text-center">
                      View More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}