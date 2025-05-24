import React from "react";

export default function About() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-16 px-4 rounded-b-3xl mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About IT Club AIU</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of tech innovators and leaders
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Story</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              The IT Club at Ala-Too International University was founded in 2018 by a group of passionate students 
              who wanted to create a community dedicated to technological innovation and learning beyond the classroom.
            </p>
            <p className="text-lg mb-4 text-gray-700 leading-relaxed">
              What started as informal meetups has grown into one of the most active student organizations at the university,
              hosting workshops, hackathons, guest lectures, and collaborative projects that connect students with industry professionals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we continue to foster a collaborative environment where students can explore new technologies, share knowledge, 
              and develop practical skills through hands-on experiences.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To create an inclusive community that empowers students to develop technical skills, 
                foster innovation, and prepare for successful careers in the technology industry through 
                hands-on learning experiences and collaborative projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the premier student-led technology organization that bridges the gap between academic 
                learning and industry requirements, empowering members to become leaders in the global 
                technology landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Team member cards */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-indigo-200 mx-auto mb-4"></div>
              <h4 className="font-semibold">Adilet Kanatbek</h4>
              <p className="text-sm text-gray-600">President</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-purple-200 mx-auto mb-4"></div>
              <h4 className="font-semibold">Aigerim Bakyt</h4>
              <p className="text-sm text-gray-600">Vice President</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-indigo-200 mx-auto mb-4"></div>
              <h4 className="font-semibold">Damir Askar</h4>
              <p className="text-sm text-gray-600">Tech Lead</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-purple-200 mx-auto mb-4"></div>
              <h4 className="font-semibold">Zarina Tursun</h4>
              <p className="text-sm text-gray-600">Event Coordinator</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-indigo-100 text-indigo-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking and exploring cutting-edge technologies to solve real-world problems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-indigo-100 text-indigo-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in teamwork, knowledge sharing, and supporting each other's growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-indigo-100 text-indigo-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                We embrace lifelong learning and staying current with evolving technologies and industry trends.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}