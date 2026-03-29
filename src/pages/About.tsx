export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <img
              src="/ioob1.jpg"
              alt="IOOB Members"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">ABOUT IOOB</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              IOOB (In Out of Bed) is a community organization dedicated to friendship,
              camaraderie, and supporting local charities. We are a group of passionate
              individuals committed to making a positive difference in our community.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our members come from diverse backgrounds, united by a common goal: to support
              those in need and foster meaningful connections within our community. We meet
              regularly to discuss initiatives, plan events, and collaborate on charitable projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">MISSION STATEMENT</h2>
            <p className="text-gray-700 text-lg leading-relaxed font-semibold mb-4">
              THE XLII CLUB'S MISSION STATEMENT IS TO PROVIDE COMPANIONSHIP, CONVIVIALITY
              AND SUPPORT TO ALL THOSE IN NEED AND DEDICATED TO SUPPORTING POLICE, DEFENCE & EMERGENCY SERVICES AUSTRALIA.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              We believe in the power of community and the strength that comes from working
              together towards common goals.
            </p>
          </div>
          <div>
            <img
              src="/ioob2.jpg"
              alt="IOOB Members"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">STATEMENT OF PURPOSE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-2 border-red-700">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">TO BRING TOGETHER ONCE A MONTH A BODY OF PEOPLE COMPRISING:</h3>
              <ul className="text-gray-700 text-sm space-y-2 text-left">
                <li>• Police officers & retired police</li>
                <li>• Public service members</li>
                <li>• Members of the military</li>
                <li>• Members of emergency services</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-2 border-red-700">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">TO PROVIDE A FORUM FOR MEMBER EXCHANGE OF INFORMATION, ENTERTAINMENT AND AWARENESS OF CURRENT ISSUES</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-2 border-red-700">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">TO FOSTER SUPPORT FOR THE MEMBERS, THEIR FAMILIES, EMERGENCY SERVICES AND ASSOCIATED CHARITABLE ORGANISATIONS</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-2 border-red-700">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">TO CONDUCT GATHERINGS OF MEMBERS FOR GOODWILL AND CONVIVIALITY</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-2 border-red-700">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">DO ALL THINGS CONDUCIVE TO THE BETTERMENT, MANAGEMENT OF THE INCOMPLETENESS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
