'use client';

import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Image from 'next/image';

export default function BookTruck() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    loadType: '',
    truckType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "b9231c81-055f-406e-aacd-3ab4c1efe8a3");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email || `noreply-${formData.phone}@agrms.com`);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("pickupLocation", formData.pickupLocation);
    formDataToSend.append("dropLocation", formData.dropLocation);
    formDataToSend.append("loadType", formData.loadType);
    formDataToSend.append("truckType", formData.truckType);
    formDataToSend.append("message", formData.message || 'No additional message');
    formDataToSend.append("subject", `New Truck Booking Enquiry from ${formData.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setIsLoading(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          pickupLocation: '',
          dropLocation: '',
          loadType: '',
          truckType: '',
          message: '',
        });
        // Reset success message after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.');
        setIsLoading(false);
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://live.staticflickr.com/65535/54995050596_284fc97822.jpg"
            alt="Book a Truck with AGRMS Transport"
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
              Book Now
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Book a Truck
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Blur Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                Get a Quote
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Book Your Truck Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you with the best transportation solution
            </p>
          </div>
          
          <Card className="relative overflow-hidden border-2 border-transparent hover:border-orange-200 transition-all duration-300 shadow-xl">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="relative z-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-black mb-3">
                  Thank You!
                </h2>
                <p className="text-lg text-gray-600 mb-2">
                  Your enquiry has been submitted successfully.
                </p>
                <p className="text-gray-600">
                  Our team will contact you shortly to discuss your
                  transportation needs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1"
                      >
                        <span>Full Name</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 hover:border-orange-300 bg-white shadow-sm hover:shadow-md"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1"
                      >
                        <span>Email</span>
                        <span className="text-gray-400 text-xs">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 hover:border-orange-300 bg-white shadow-sm hover:shadow-md"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1"
                      >
                        <span>Phone Number</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 12345 67890"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 hover:border-orange-300 bg-white shadow-sm hover:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Information Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Location Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pickup Location */}
                    <div className="group">
                      <label
                        htmlFor="pickupLocation"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1"
                      >
                        <span>Pickup Location</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="pickupLocation"
                          name="pickupLocation"
                          required
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          placeholder="City, State"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 hover:border-orange-300 bg-white shadow-sm hover:shadow-md"
                        />
                      </div>
                    </div>

                    {/* Drop Location */}
                    <div className="group">
                      <label
                        htmlFor="dropLocation"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1"
                      >
                        <span>Drop Location</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="dropLocation"
                          name="dropLocation"
                          required
                          value={formData.dropLocation}
                          onChange={handleChange}
                          placeholder="City, State"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 hover:border-orange-300 bg-white shadow-sm hover:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipment Details Section */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    Shipment Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Load Type */}
                    <div className="group">
                      <label
                        htmlFor="loadType"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1"
                      >
                        <span>Load Type</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-600 transition-colors pointer-events-none z-10">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <select
                          id="loadType"
                          name="loadType"
                          required
                          value={formData.loadType}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 hover:border-orange-300 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none"
                        >
                          <option value="">Select Load Type</option>
                          <option value="ftl">Full Truck Load (FTL)</option>
                          <option value="part-load">Part Load / Shared Load</option>
                          <option value="local">Local Transport</option>
                          <option value="inter-state">Inter-State Transport</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Truck Type */}
                    <div className="group">
                      <label
                        htmlFor="truckType"
                        className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1"
                      >
                        <span>Truck Type</span>
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-600 transition-colors pointer-events-none z-10">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                        <select
                          id="truckType"
                          name="truckType"
                          required
                          value={formData.truckType}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 hover:border-orange-300 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none"
                        >
                          <option value="">Select Truck Type</option>
                          <option value="container">Container Truck</option>
                          <option value="flatbed">Flatbed Truck</option>
                          <option value="tipper">Tipper Truck</option>
                          <option value="trailer">Trailer Truck</option>
                          <option value="semi-trailer">Semi-Trailer</option>
                          <option value="mini-truck">Mini Truck</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Section */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    Additional Message (Optional)
                  </label>
                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Provide any additional details about your shipment, special requirements, or delivery instructions..."
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-200 hover:border-orange-300 resize-none bg-white shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="pt-4">
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-800 font-semibold mb-1">Submission Failed</p>
                        <p className="text-red-600 text-sm">{submitError}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg px-8 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
