import Card from '../components/Card';
import Image from 'next/image';

export const metadata = {
  title: 'Contact Us - AGRMS Transport',
  description: 'Get in touch with AGRMS Transport for all your logistics and transportation needs. Call, email, or visit our office.',
};

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://live.staticflickr.com/65535/54995050596_284fc97822.jpg"
            alt="Contact AGRMS Transport"
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
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
            Get in touch with our team for all your transportation needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card className="text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-orange-200 group relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Phone</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Call us for immediate assistance
                </p>
                <a
                  href="tel:+918019847549"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold text-xl transition-all duration-200 group-hover:gap-3"
                >
                  +91 80198 47549
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </Card>

            {/* Email */}
            <Card className="text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-orange-200 group relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Email</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Send us an email anytime
                </p>
                <a
                  href="mailto:agrms@gmail.com"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold text-lg break-all transition-all duration-200 group-hover:gap-3"
                >
                  agrms@gmail.com
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </Card>

            {/* Address */}
            <Card className="text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-orange-200 group relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-300">Office</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Visit us at our office
                </p>
                <p className="text-black font-semibold text-lg leading-relaxed group-hover:text-gray-800 transition-colors">
                  Near to Khaja Traders,<br />
                  Autonagar,<br />
                  Vijayawada, 520007<br />
                  India
                </p>
              </div>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black text-center mb-8">
              Find Us on Map
            </h2>
            <Card className="p-0 overflow-hidden">
              <div className="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.1889542137193!2d80.67314246653822!3d16.5002482784902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fad9a42d73d1%3A0xdc65f287fcc271ab!2sKHAJA%20TRADING%20COMPANY!5e0!3m2!1sen!2sin!4v1766213650597!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
