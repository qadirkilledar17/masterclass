import React, { useState } from "react";
import {
  Search,
  User,
  Calendar,
  MapPin,
  Users,
  Ticket,
  Shield,
  Globe,
  Clock,
} from "lucide-react";

const MasterclassLanding = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: 1,
      name: "Advanced System Architecture 2024",
      poster:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      type: "Online",
      privacy: "Public",
      host: "Sarah Drasner",
      description:
        "Deep dive into distributed systems, load balancing, and microservices scaling strategies.",
      dateTime: "Oct 24, 10:00 AM",
      pricing: "Free",
      attendees: 1240,
    },
    {
      id: 2,
      name: "Product Design Masterclass",
      poster:
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
      type: "Hybrid",
      privacy: "Private",
      host: "Gary Simon",
      description:
        "Mastering the art of visual hierarchy, accessibility, and modern UI frameworks.",
      dateTime: "Nov 02, 02:30 PM",
      pricing: "$49.00",
      attendees: 850,
    },
    {
      id: 3,
      name: "The DevOps Blueprint",
      poster:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800",
      type: "Online",
      privacy: "Public",
      host: "Kelsey Hightower",
      description:
        "Everything you need to know about Kubernetes, Docker, and CI/CD pipelines.",
      dateTime: "Nov 15, 09:00 AM",
      pricing: "$99.00",
      attendees: 3200,
    },
    {
      id: 4,
      name: "AI & Machine Learning Ethics",
      poster:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      type: "Offline",
      privacy: "Public",
      host: "Dr. Aris Noble",
      description:
        "Exploring the philosophical and practical implications of LLMs in modern tech.",
      dateTime: "Dec 05, 01:00 PM",
      pricing: "Free",
      attendees: 450,
    },
    {
      id: 5,
      name: "Fullstack Next.js 14 Workshop",
      poster:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      type: "Online",
      privacy: "Private",
      host: "Lee Robinson",
      description:
        "Building production-ready applications with Server Actions and App Router.",
      dateTime: "Dec 12, 04:00 PM",
      pricing: "$120.00",
      attendees: 2100,
    },
    {
      id: 6,
      name: "Venture Capital Fundamentals",
      poster:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
      type: "Hybrid",
      privacy: "Public",
      host: "Naval Ravikant",
      description:
        "How to raise your first round and understand the economics of startups.",
      dateTime: "Jan 10, 11:00 AM",
      pricing: "Free",
      attendees: 5600,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-black tracking-tighter italic">
              MASTERCLASS.
            </h1>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-black transition-colors">
                Browse
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Mentors
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-1 justify-end">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search workshops, hosts or topics..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="text-right hidden lg:block">
                <p className="text-xs font-bold leading-none">Qadir Killedar</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                  Pro Member
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white ring-2 ring-white ring-offset-2">
                <User size={20} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl">
          <h2 className="text-6xl font-black leading-[1.1] tracking-tight mb-6">
            Learn from the <span className="text-blue-600">Architects</span> of
            the industry.
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            Exclusive access to intensive workshops designed for high-growth
            engineers and creative thinkers.
          </p>
        </div>
      </header>

      {/* Grid Content */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-100"
            >
              {/* Poster Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.poster}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    {event.type === "Online" ? (
                      <Globe size={10} />
                    ) : (
                      <MapPin size={10} />
                    )}
                    {event.type}
                  </span>
                  <span className="bg-white/90 backdrop-blur-md text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    {event.privacy === "Public" ? (
                      <Users size={10} />
                    ) : (
                      <Shield size={10} />
                    )}
                    {event.privacy}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-blue-600 transition-colors">
                    {event.name}
                  </h3>
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg font-black text-sm">
                    {event.pricing}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200" />
                  <span className="text-sm font-medium text-gray-600">
                    by {event.host}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-gray-50">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-700">
                      {event.dateTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-700">
                      {event.attendees.toLocaleString()}+
                    </span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Reserve My Spot
                  <Ticket
                    size={18}
                    className="group-hover/btn:rotate-12 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-gray-400 font-medium">
            © 2024 MASTERCLASS INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-sm font-bold text-gray-600">
            <a href="#" className="hover:text-black transition-colors">
              TWITTER
            </a>
            <a href="#" className="hover:text-black transition-colors">
              GITHUB
            </a>
            <a href="#" className="hover:text-black transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasterclassLanding;
