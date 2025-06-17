import Link from 'next/link';

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">What We Do</h1>
          
          <div className="space-y-12">
            <section className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-purple-600">Our Purpose</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                JustPushIt is a community of makers and creators who believe in the power of consistent progress. 
                We understand that building something great takes time and dedication, and that&apos;s why we&apos;ve created 
                a space where you can share your journey and get support from like-minded individuals.
              </p>
            </section>

            <section className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-purple-600">How It Works</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Share Your Progress</h3>
                    <p className="text-gray-600">
                      Post daily updates about what you&apos;re working on, no matter how small the progress.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Get Feedback</h3>
                    <p className="text-gray-600">
                      Receive valuable insights and suggestions from the community to help you move forward.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Stay Accountable</h3>
                    <p className="text-gray-600">
                      Keep pushing forward with the support and motivation of fellow makers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-purple-600">Join Us</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Ready to start your journey? Join our community and start sharing your progress today.
              </p>
              <Link 
                href="/find-us" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
              >
                Find Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 