import Card from '../components/Card';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - AGRMS Transport',
  description: 'Learn about AGRMS Transport - Your trusted logistics partner with a commitment to safety, reliability, and timely delivery.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://live.staticflickr.com/65535/54995050596_284fc97822.jpg"
            alt="AGRMS Transport Fleet"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            About
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
            Your Trusted Logistics Partner Across India
          </p>
        </div>
      </section>

      {/* Company Overview with Image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Company Overview
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  AGRMS Transport is a leading provider of truck transport and
                  logistics services based in Vijayawada, Andhra Pradesh. With over 15 years of experience
                  in the industry, we have established ourselves as a reliable and
                  trusted partner for businesses and individuals requiring efficient
                  and safe cargo transportation.
                </p>
                <p>
                  We specialize in connecting Vijayawada to major cities including Hyderabad, Guntur, Visakhapatnam, 
                  Bengaluru, Chennai, and many more destinations. Our extensive fleet enables us to handle loads
                  of all sizes, from small parcels to full truckloads.
                </p>
                <p>
                  We transport all types of goods including 
                  electronics, textiles, machinery, food products, construction materials, pharmaceuticals, 
                  agricultural products, and general cargo with utmost care and precision.
                </p>
                <p className="font-semibold text-black">
                  We offer Full Truck Load (FTL), Part Load, Local Transport, and
                  Inter-State Transport services, ensuring timely and secure delivery of your shipments.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://live.staticflickr.com/65535/54995310889_5d7c5956f5.jpg"
                  alt="AGRMS Transport Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-black">15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence drives everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white border-0 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg text-white/95 leading-relaxed">
                  To provide reliable, efficient, and cost-effective transport
                  and logistics solutions that exceed customer expectations
                  while maintaining the highest standards of safety and service
                  excellence.
                </p>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white border-0 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg text-white/95 leading-relaxed">
                  To become India's most trusted and preferred logistics partner
                  by continuously innovating our services, expanding our network,
                  and building lasting relationships with our customers based on
                  trust, transparency, and reliability.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                Our Promise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the logistics industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:border-orange-500 border-2 border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">Safety First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize the safety of your cargo and our personnel above
                  all else. Our fleet undergoes regular maintenance, and our
                  drivers are highly trained professionals committed to safe
                  driving practices.
                </p>
              </div>
            </Card>

            <Card className="group hover:border-orange-500 border-2 border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">Reliability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand that your business depends on timely delivery.
                  Our proven track record of on-time deliveries and consistent
                  service quality makes us a reliable partner you can count on.
                </p>
              </div>
            </Card>

            <Card className="group hover:border-orange-500 border-2 border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                  Timely Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to delivering your cargo on time, every time.
                  Our efficient logistics network and real-time tracking ensure
                  that your shipment reaches its destination as promised.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}