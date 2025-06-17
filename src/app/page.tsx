import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50"></div>
        <div className="container mx-auto px-6 py-32 relative">
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                JustPushIt
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
                A community of makers pushing their projects forward together.
              </p>
            </div>
            <div className="flex gap-6">
              <Link 
                href="/what-we-do"
                className="group relative px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <span className="relative z-10">What We Do</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/find-us"
                className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Daily Updates</h3>
              <p className="text-gray-600">Share your progress and get motivated by seeing what others are building.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Community Support</h3>
              <p className="text-gray-600">Get feedback and suggestions from fellow creators.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Stay Accountable</h3>
              <p className="text-gray-600">Keep pushing forward with the support of a like-minded community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our community of makers and start sharing your progress today.
          </p>
          <Link 
            href="/find-us"
            className="inline-block px-8 py-4 bg-black text-white rounded-full hover:shadow-lg transition-all duration-300"
          >
            Join Now
          </Link>
        </div>
      </section>
    </main>
  )
}
