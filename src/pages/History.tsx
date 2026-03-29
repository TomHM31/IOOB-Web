export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">HISTORY OF IOOB</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <img
              src="/ioob1.jpg"
              alt="IOOB History"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">The Beginning</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                The IOOB Club was first formed in 1984, in the time of the Cold War. A group of retired members from the defence forces and current members of various other departments joined together to form what is now IOOB Club. Initially, it was decided to meet their own club with a meeting structured at the Holden Club.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Growing Together</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Over the years, the IOOB Club was reorganized in December 1988 as the IOOB Club. The IOOB founded its new home with a memorial to a past member in Melbourne. In 1996, the organization began expanding its charitable focus.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Recent Milestones</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                From February to December of 2023, more members joined the membership and have grown up since the history of 1988. When the organization started, we had 200-250 members. That Foundation continues to conduct its meetings to this day to support our worldwide causes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Journey</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white font-bold text-lg">
                  1984
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Foundation Year</h3>
                <p className="text-gray-700">
                  IOOB Club was founded as a community organization bringing together service members and retirees.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white font-bold text-lg">
                  1988
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Reorganization</h3>
                <p className="text-gray-700">
                  The club was reorganized and formalized, expanding its mission and charitable focus.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white font-bold text-lg">
                  1996
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Expansion</h3>
                <p className="text-gray-700">
                  Beginning of significant expansion of charitable initiatives and community outreach programs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-700 text-white font-bold text-lg">
                  2024
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Today</h3>
                <p className="text-gray-700">
                  Continuing our mission of supporting the community with dedicated members and growing charitable impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Over four decades, IOOB has remained committed to its core values of friendship, support, and community service.
            Our history is a testament to the dedication of our members and the positive impact we've made together.
          </p>
        </div>
      </div>
    </div>
  );
}
