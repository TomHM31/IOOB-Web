export default function About() {
  return (
    <section className="bg-white py-16 px-4 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-red-900 mb-8 text-center">
          About Us
        </h2>
        <div className="bg-amber-50 rounded-lg p-8 border-2 border-blue-900 border-opacity-20">
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            IOOB-Melbourne is a welcoming group of like-minded individuals who gather to enjoy each other's company and make a meaningful impact in our local community.
          </p>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            We meet every <span className="font-bold text-red-900">third Thursday of every second month</span> to celebrate our friendships, share stories, and support various local charities that matter to us.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Whether you're a longtime friend or considering joining us, we're here to welcome you with open arms and good conversation. No pretense, no fuss—just genuine camaraderie and community spirit.
          </p>
        </div>
      </div>
    </section>
  );
}
