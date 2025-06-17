export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">What We Do</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Our Purpose</h3>
              <p className="text-gray-600">We&apos;re here to help makers stay motivated and accountable.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">How It Works</h3>
              <p className="text-gray-600">Share your progress, get feedback, and push your projects forward with the community&apos;s support.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Join Us</h3>
              <p className="text-gray-600">It&apos;s free to join and you&apos;ll find a supportive group of makers just like you.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 