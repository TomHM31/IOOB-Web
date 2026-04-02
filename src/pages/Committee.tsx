import { Mail, Phone, User } from "lucide-react";

type CommitteeMember = {
  id: string;
  role: string;
  name: string;
  email: string;
  phone: string;
  /** Set when you add e.g. `/committee-photos/alastair-wright.jpg` in public */
  photoSrc?: string;
};

const COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    id: "alastair-wright",
    role: "Arch Bastard (President)",
    name: "Alastair WRIGHT",
    email: "alastair@ioob.net",
    phone: "0419 751 390",
    photoSrc: "/comittee/test.jpg",
  },
  {
    id: "neil-baird-watson",
    role: "Deputy Arch Bastard",
    name: "Neil BAIRD-WATSON",
    email: "neil.bw@gmail.com",
    phone: "0424 234 444",
  },
  {
    id: "ian-arrell",
    role: "Secretary/Treasurer",
    name: "Ian ARRELL OAM",
    email: "ian@ioob.net",
    phone: "0428 172 719",
  },
  {
    id: "david-anderson",
    role: "Assistant Secretary and in charge of luncheon seating",
    name: "David ANDERSON",
    email: "david@ioob.net",
    phone: "0418 207 421",
  },
  {
    id: "arthur-ritchie",
    role: "Conveyer of raffles",
    name: "Arthur RITCHIE",
    email: "fishartyfish@gmail.com",
    phone: "0417 080 108",
  },
  {
    id: "simon-wheelton",
    role: "Committee man",
    name: "Simon WHEELTON",
    email: "simon@wheelton.com.au",
    phone: "0438 151 710",
  },
  {
    id: "steve-barling",
    role: "Committee man",
    name: "Steve BARLING AFSM",
    email: "stevejb2@exemail.com.au",
    phone: "0407 828 625",
  },
];

function Headshot({ member }: { member: CommitteeMember }) {
  if (member.photoSrc) {
    return (
      <img
        src={member.photoSrc}
        alt={member.name}
        className="h-36 w-36 rounded-full object-cover border-4 border-white shadow-md ring-2 ring-blue-200"
      />
    );
  }
  return (
    <div
      className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-100 shadow-md ring-2 ring-blue-200"
      aria-hidden
    >
      <User className="h-16 w-16 text-blue-300" strokeWidth={1.25} />
    </div>
  );
}

export default function Committee() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          Committee
        </h1>
        <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Melbourne chapter office bearers. Reach out by email or phone—your
          committee is here to help with meetings, membership, and how we
          support the community.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {COMMITTEE_MEMBERS.map((member) => (
            <li key={member.id}>
              <article className="h-full flex flex-col bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center mb-5">
                  <Headshot member={member} />
                  <h2 className="mt-5 text-sm font-semibold uppercase tracking-wide text-blue-800 leading-snug px-1">
                    {member.role}
                  </h2>
                  <p className="mt-2 text-xl font-bold text-blue-900 leading-tight">
                    {member.name}
                  </p>
                </div>

                <div className="mt-auto space-y-3 text-sm border-t border-blue-200/80 pt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-start gap-3 text-gray-700 hover:text-blue-900 transition-colors group"
                  >
                    <Mail
                      className="w-5 h-5 text-blue-800 shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span className="underline-offset-2 group-hover:underline break-all text-left">
                      {member.email}
                    </span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 text-gray-700 hover:text-blue-900 transition-colors group"
                  >
                    <Phone
                      className="w-5 h-5 text-blue-800 shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span className="group-hover:underline">
                      {member.phone}
                    </span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
