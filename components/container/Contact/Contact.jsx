import React from 'react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: 'Doe',
    email: '',
    phone: '+1 012 3456 789',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Any question or remarks? Just write us a message!</p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Panel - Contact Information */}
            <div className="bg-primary text-white p-8 lg:p-12 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#DC103E] rounded-full  -mb-8 -mr-8"></div>
              <div className="absolute bottom-28 right-28 w-36 h-36 bg-[#FF436D] rounded-full "></div>

              <div className="relative z-10  h-full flex flex-col justify-center">
                <div className=' absolute top-0 left-0'>
                  <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                  <p className="text-red-100 mb-8">Say something to start a live chat!</p>
                </div>

                <div className='flex flex-col gap-4  pt-' >

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <span className="text-lg">+1012 3456 789</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span className="text-lg">demo@gmail.com</span>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg">132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Contact Form */}
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-b focus:outline-none"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-b focus:outline-none"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-b focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-b focus:outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Subject?
                  </label>
                  <div className=" flex flex-row gap-4">
                    {['General Inquiry', 'General Inquiry', 'General Inquiry', 'General Inquiry'].map((subject, index) => (
                      <label key={index} className="flex items-center space-x-1 cursor-pointer">
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          checked={formData.subject === subject}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                        />
                        <span className="text-gray-700 text-xs">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border-b border-gray-300 focus:border-b focus:outline-none resize-none"
                    placeholder="Write your message.."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                  >lsk
                    Send Messageldkfjl
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};