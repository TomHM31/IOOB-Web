export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/ioob1.jpg"
        alt="IOOB-Melbourne Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="mb-8 flex justify-center">
          <img
            src="/logo.jpg"
            alt="IOOB-Melbourne Logo"
            className="h-32 sm:h-48 w-auto drop-shadow-lg"
          />
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          IOOB-Melbourne
        </h1>
        <p className="text-2xl sm:text-3xl text-yellow-50 font-serif italic mb-8 drop-shadow-md">
          Illigitimus Non Carborundum
        </p>
        <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          A community of kindred spirits coming together to share laughs, support each other, and make a difference in Melbourne.
        </p>
      </div>
    </section>
  );
}
