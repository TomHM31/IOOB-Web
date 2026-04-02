import { Facebook, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About IOOB-Melbourne</h3>
            <p className="text-blue-100 leading-relaxed">
              A community group dedicated to friendship, camaraderie, and
              supporting local charities. Meeting every third Thursday of every
              second month.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:ioob@outlook.com.au"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>ioob@outlook.com.au</span>
              </a>
              <a
                href="https://www.facebook.com/p/IOOB-Melbourne-100064583690352/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <a
              href="mailto:ioob@outlook.com.au"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-100 flex items-center justify-center gap-2 mb-2">
            Made with <Heart size={16} className="text-red-400" /> for our
            community
          </p>
          <p className="text-blue-200 text-sm">
            &copy; 2026 IOOB-Melbourne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
