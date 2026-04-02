export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          About IOOB Melbourne
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Our story spans continents and decades—from wartime Brisbane to a
          worldwide fellowship—while our Melbourne chapter keeps that spirit
          alive through friendship and practical charity.
        </p>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Our origins &amp; global reach
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            <figure className="shrink-0 mx-auto md:mx-0 w-44 sm:w-48 md:w-52">
              <img
                src="/about-portrait-1.jpg"
                alt="Photograph alongside the story of IOOB origins and global reach"
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg border border-blue-100"
              />
            </figure>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4 min-w-0 flex-1">
              <p>
                The International Order of Old Bastards began in Brisbane in
                1945, during the Second World War. Fred Kibbe (Archbastard I)
                and allied officers founded the order after noticing how
                Australians used &ldquo;bastard&rdquo; as a term of endearment—a
                spark of humour and mateship that became our trademark.
              </p>
              <p>
                Fred Kibbe passed away in 1980, but the spirit of fun and
                fellowship he championed lives on in chapters around the world.
              </p>
              <p>
                Today, global headquarters is in Fort Lauderdale, Florida, which
                has chartered more than 4,600 chapters. There are over one
                million members worldwide—predominantly in the United States
                (about 80%) and Canada (about 10%)—united by the same irreverent
                goodwill.
              </p>
              <p>
                We even have a humorous chapter in our history: in 1969, the
                order found itself explaining its legitimacy to both the IRS and
                Pan American World Airways—proof that our name raises eyebrows
                as often as it opens doors.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            The Melbourne chapter today
          </h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-10 items-start">
            <figure className="shrink-0 mx-auto md:mx-0 w-44 sm:w-48 md:w-52">
              <img
                src="/about-portrait-2.jpg"
                alt="Photograph alongside the Melbourne chapter today"
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg border border-blue-100"
              />
            </figure>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4 min-w-0 flex-1">
              <p>
                Here in Melbourne we are approaching our 50th anniversary—a
                milestone built on the same blend of humour and heart that
                started it all.
              </p>
              <p>
                We are a registered charity (A.U. Chapter Inc) and a diverse,
                fun-loving social group, including people with backgrounds in
                the military, police, and emergency services, alongside members
                from many other walks of life.
              </p>
              <p>
                We meet on the third Thursday of every second month—a regular
                rhythm for catching up, planning support, and enjoying each
                other&apos;s company.
              </p>
              <p>
                Our motto is &ldquo;Illegitimus Non Carborundum&rdquo;—
                <em>Don&apos;t let the bastards wear you down!</em>—a
                light-hearted reminder to stand together when times get tough.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Our mission &amp; how we help
          </h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4 max-w-4xl">
            <p>
              We foster camaraderie while raising funds to assist individuals
              facing hardship or necessitous circumstances. That practical focus
              means we can respond when people fall through the cracks—whether
              they need a hand with essentials or a connection to someone who
              cares.
            </p>
            <p>
              Our support includes emergency aid, medical equipment, and
              partnerships with local charities such as children&apos;s
              hospitals, so that help reaches families and front-line services
              in our community.
            </p>
            <p>
              We follow a strict policy: we do not support organisations that
              use paid fundraisers. We want donations and effort to go where
              they do the most good, not into commission-driven campaigns.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-700 text-white font-bold text-xl">
                1
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Fellowship & Community
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Provide a welcoming space and regular social gatherings for our
              growing community of over 200 members, fostering strong bonds of
              friendship.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-700 text-white font-bold text-xl">
                2
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Targeted Financial Support
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Deliver direct financial assistance to individuals facing
              necessitous circumstances through no fault of their own.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-700 text-white font-bold text-xl">
                3
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Active Fundraising
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sustain our charitable efforts through community-driven
              initiatives, including regular raffles, auctions, and the sale of
              official IOOB merchandise.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-700 text-white font-bold text-xl">
                4
              </div>
              <h2 className="text-2xl font-bold text-blue-900">
                Community Referral Network
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Collaborate closely with local healthcare professionals, as well
              as our own members, to identify and connect with people who
              urgently require support.
            </p>
          </div>
        </div>

        <blockquote className="border-l-4 border-amber-400 bg-blue-50 pl-6 pr-6 py-6 rounded-r-lg text-gray-800 text-lg leading-relaxed italic max-w-4xl">
          &ldquo;Together with the traditional owners we would like to
          acknowledge all the Migrants who made this great land what it is
          today&rdquo;.
        </blockquote>
      </div>
    </div>
  );
}
