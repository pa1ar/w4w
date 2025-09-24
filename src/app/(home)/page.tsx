import Link from 'next/link';
import MapboxMap from '@/components/MapboxMap';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Wheels4Wheels
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Mapping wheelchair accessibility through data-driven insights and community collaboration. 
            Join us in creating a more inclusive world, one route at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore the Research
            </Link>
            <Link
              href="/docs/Photo-Telemetry_File_Correlation"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Interactive Map
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Accessibility in Action
          </h2>
          <div className="bg-gray-100 rounded-xl p-4 shadow-lg">
            <MapboxMap className="rounded-lg" />
          </div>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Our interactive map shows wheelchair accessibility data collected through 
            photo-telemetry correlation and surface smoothness analysis.
          </p>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Research Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                OpenStreetMap Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Leveraging OpenStreetMap data to identify and map wheelchair accessibility attributes.
              </p>
              <Link
                href="/docs/Attributes_on_OpenStreetMaps"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Surface Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced analysis of surface smoothness to identify wheelchair-friendly routes.
              </p>
              <Link
                href="/docs/Surface_Smoothness_Analysis"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Photo-Telemetry Correlation
              </h3>
              <p className="text-gray-600 mb-4">
                Correlating visual data with telemetry to create comprehensive accessibility maps.
              </p>
              <Link
                href="/docs/Photo-Telemetry_File_Correlation"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Help us build a comprehensive database of wheelchair accessibility 
            information for communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/wheels4wheels_for_HoC"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/docs"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
