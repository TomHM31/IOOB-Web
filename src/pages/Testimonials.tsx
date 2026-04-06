export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Marek Nieczyporuk",
      title: "Community Beneficiary",
      message:
        "IOOB provided essential support after I lost my home in a fire. The generator and reading glasses they donated have brought comfort and hope back into my life during a very difficult time.",
      initials: "MN",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          TESTIMONIALS
        </h1>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Hear from members and partners about how IOOB has made a difference in
          their lives and communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-700 text-white font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-bold text-blue-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-red-700 font-semibold">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.message}"
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white p-12 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Have a story to share about how IOOB has impacted your life or
            community? We'd love to hear from you.
          </p>
          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
            Send Your Testimonial
          </button>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Why Members Choose IOOB
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-red-700 mb-2">500+</div>
              <p className="text-gray-700">Active Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-700 mb-2">40+</div>
              <p className="text-gray-700">Years of Service</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-700 mb-2">100+</div>
              <p className="text-gray-700">Charities Supported</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
