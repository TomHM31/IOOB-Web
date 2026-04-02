import { Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          NEWSLETTER
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
          Stay updated with the latest news, events, and stories from the IOOB
          community. Subscribe to our newsletter for monthly updates.
        </p>

        <div className="mb-16 w-full">
          <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">
            April 2026 newsletter
          </h2>
          <p className="text-center text-gray-600 text-sm mb-4">
            Scroll inside the viewer to read all pages.{" "}
            <a
              href="/APRIL%202026%20Newsletter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-semibold underline hover:no-underline"
            >
              Open PDF in a new tab
            </a>{" "}
            if it does not appear.
          </p>
          <iframe
            title="April 2026 IOOB newsletter (PDF)"
            src="/APRIL%202026%20Newsletter.pdf"
            className="w-full min-h-[95vh] rounded-lg border-2 border-blue-200 shadow-lg bg-gray-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/ioob3.jpg"
              alt="Newsletter"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Join Our Community
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our newsletter keeps you informed about upcoming events,
              charitable initiatives, and meaningful stories from our members.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Subscribe today and be part of our growing community of dedicated
              individuals committed to making a positive difference.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-blue-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-6 py-3 text-lg border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Subscribe Now
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border-2 border-green-600 text-green-700 rounded-lg font-semibold">
                Thank you for subscribing! Check your email for confirmation.
              </div>
            )}

            <p className="text-sm text-gray-600 mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            What You'll Receive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📰</div>
              <h3 className="font-bold text-blue-900 mb-2">Latest News</h3>
              <p className="text-gray-700 text-sm">
                Stay informed about club updates and announcements
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-bold text-blue-900 mb-2">Event Updates</h3>
              <p className="text-gray-700 text-sm">
                Be first to know about upcoming gatherings and events
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="font-bold text-blue-900 mb-2">Member Stories</h3>
              <p className="text-gray-700 text-sm">
                Read inspiring stories from our community members
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-blue-900 mb-2">Charity Updates</h3>
              <p className="text-gray-700 text-sm">
                Learn about our charitable initiatives and impact
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-red-900 text-white p-12 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Past Newsletter Highlights
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-white/20">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-bold mb-1">March 2024: Community Heroes</h3>
                <p className="text-blue-100">
                  Celebrating our members who go above and beyond to help others
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-white/20">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-bold mb-1">
                  February 2024: Charity Drive Success
                </h3>
                <p className="text-blue-100">
                  Record-breaking donations to local charities and support
                  organizations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-bold mb-1">
                  January 2024: New Year, New Goals
                </h3>
                <p className="text-blue-100">
                  Our vision and plans for 2024 and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
