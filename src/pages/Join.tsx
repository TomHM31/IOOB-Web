import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Become a member</h1>
        <div className="text-gray-700 text-lg leading-relaxed space-y-4 mb-12 text-center">
          <p>
            Thank you for your interest in the International Order of Old Bastards (IOOB) Melbourne. We are a
            welcoming community built on friendship, good humour, and a shared commitment to supporting those
            who need a hand.
          </p>
          <p>
            As a member, you can join our regular gatherings, stay connected through our newsletter, take
            part in charitable initiatives, and enjoy the camaraderie that comes from standing alongside
            like-minded people who value mateship and giving back.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Mail className="w-6 h-6 shrink-0" aria-hidden />
            Contact the Secretary
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Membership and payment questions are handled by the Secretary. Use the form below to express your
            interest, or get in touch using the payment and postal details further down if you are ready to
            join or pay your fees.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mb-6">Express your interest</h2>
        <p className="text-gray-700 mb-6">
          Tell us a little about yourself. We will pass your details to the Secretary so someone can follow up
          with next steps.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 mb-16">
          <div>
            <label htmlFor="join-name" className="block text-sm font-semibold text-blue-900 mb-2">
              Full name
            </label>
            <input
              id="join-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="join-email" className="block text-sm font-semibold text-blue-900 mb-2">
              Email
            </label>
            <input
              id="join-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="join-phone" className="block text-sm font-semibold text-blue-900 mb-2">
              Phone
            </label>
            <input
              id="join-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
              autoComplete="tel"
            />
          </div>
          <div>
            <label htmlFor="join-message" className="block text-sm font-semibold text-blue-900 mb-2">
              Message <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <textarea
              id="join-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900 transition-colors resize-y"
              placeholder="Anything you would like us to know…"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send expression of interest
          </button>
          {submitted && (
            <div className="p-4 bg-green-50 border-2 border-green-600 text-green-800 rounded-lg font-semibold">
              Thank you. Your details have been noted for follow-up. If you need to pay fees straight away,
              please use the bank or cheque details below.
            </div>
          )}
        </form>

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">How to pay</h2>
          <p className="text-gray-700 mb-6">
            When you are ready to pay your membership fees, use the following details. Include your name as
            the payment reference so we can match your payment.
          </p>

          <div className="bg-gray-50 border-2 border-blue-200 rounded-lg p-6 mb-8 space-y-3 text-gray-800">
            <p>
              <span className="font-semibold text-blue-900">Account name:</span> INT ORDER OF OLD BASTARDS
            </p>
            <p>
              <span className="font-semibold text-blue-900">Bank:</span> National Australia Bank
            </p>
            <p>
              <span className="font-semibold text-blue-900">BSB:</span> 083-802
            </p>
            <p>
              <span className="font-semibold text-blue-900">Account number:</span> 17-940-7264
            </p>
            <p>
              <span className="font-semibold text-blue-900">Reference:</span> Your name
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Pay by cheque</h3>
            <p className="text-gray-700 leading-relaxed">
              You can pay by cheque to the Secretary, I.O.O.B., mailed to:
            </p>
            <address className="mt-3 not-italic text-gray-800 font-medium">
              78 Bould Road
              <br />
              Cardinia VIC 3978
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
