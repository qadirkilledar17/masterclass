import React, { useState } from "react";
import {
  Search,
  User,
  Calendar,
  Globe,
  Shield,
  Users,
  Clock,
  Star,
  Zap,
  Bell,
  ChevronRight,
  LayoutGrid,
  MapPin,
  Layers,
  PlayCircle,
} from "lucide-react";

const CurvupProduction = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: 1,
      name: "High-Performance System Design",
      host: "Qadir Killedar",
      hostTitle: "Infrastructure Architect",
      poster:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000",
      type: "Online",
      privacy: "Public",
      description:
        "Mastering zero-latency architectures and global state synchronization at scale using modern cloud-native patterns.",
      date: "Dec 28, 2025",
      time: "10:00 AM",
      pricing: "Free",
      attendees: 1240,
      level: "Advanced",
      duration: "4h 30m",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Generative AI for Product Teams",
      host: "Sarah Chen",
      hostTitle: "AI Product Lead",
      poster:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
      type: "Hybrid",
      privacy: "Private",
      description:
        "Bridging the gap between LLM capabilities and user-centric product design. Practical frameworks for AI integration.",
      date: "Jan 05, 2026",
      time: "02:30 PM",
      pricing: "$129",
      attendees: 850,
      level: "Intermediate",
      duration: "6h 00m",
      rating: 5.0,
    },
    {
      id: 3,
      name: "The Art of Visual Storytelling",
      host: "Marcus Vane",
      hostTitle: "Director @ Theory",
      poster:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000",
      type: "Offline",
      privacy: "Public",
      description:
        "A deep dive into cinematography, lighting, and psychological color grading for modern digital media.",
      date: "Jan 12, 2026",
      time: "09:00 AM",
      pricing: "$250",
      attendees: 320,
      level: "All Levels",
      duration: "12h 00m",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Fullstack Engineering with Rust",
      host: "Alex Rivers",
      hostTitle: "Core Maintainer",
      poster:
        "https://images.unsplash.com/photo-1629904853716-f0bc54ea481c?q=80&w=2000",
      type: "Online",
      privacy: "Public",
      description:
        "Building memory-safe, high-concurrency web applications from scratch. Deep dive into the Rust ecosystem.",
      date: "Jan 18, 2026",
      time: "11:00 AM",
      pricing: "Free",
      attendees: 4200,
      level: "Expert",
      duration: "8h 15m",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Venture Capital & Deal Flow",
      host: "Elena Rodriguez",
      hostTitle: "Partner @ Sequoia",
      poster:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000",
      type: "Hybrid",
      privacy: "Private",
      description:
        "Decoding the investment process, from initial term sheets to exit strategies and portfolio management.",
      date: "Feb 02, 2026",
      time: "04:00 PM",
      pricing: "$499",
      attendees: 150,
      level: "Advanced",
      duration: "3h 45m",
      rating: 4.7,
    },
    {
      id: 6,
      name: "Minimalist Brand Architecture",
      host: "Dieter Rams Jr.",
      hostTitle: "Design Philosopher",
      poster:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000",
      type: "Online",
      privacy: "Public",
      description:
        "Principles of 'less but better'. How to build a brand identity that survives the noise of the 21st century.",
      date: "Feb 10, 2026",
      time: "10:00 AM",
      pricing: "$89",
      attendees: 1100,
      level: "Intermediate",
      duration: "5h 20m",
      rating: 5.0,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      {/* Dynamic Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-black tracking-tighter uppercase">
              curvup.
            </h1>
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              <a
                href="#"
                className="text-black hover:text-blue-600 transition-colors"
              >
                Catalog
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Mentors
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Enterprise
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="relative hidden sm:block w-full max-w-[300px] group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full bg-black/[0.04] border-none rounded-sm py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-black transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-black/[0.08]">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors">
                <User size={20} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600"></span> Current Curriculum
          </h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
            ELITE SKILLS <br /> WITHOUT OVERHEAD.
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Direct access to high-density knowledge from industry leaders. No
            fluff, just the architecture of success.
          </p>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-[1400px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {events.map((event) => (
            <div key={event.id} className="group flex flex-col bg-white">
              {/* Poster: Original Horizontal Size */}
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-gray-100 ring-1 ring-black/5">
                <img
                  src={event.poster}
                  alt={event.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Floating Meta */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-white px-3 py-1 text-[9px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-1.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        event.type === "Online"
                          ? "bg-green-500 animate-pulse"
                          : "bg-blue-600"
                      }`}
                    />
                    {event.type}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-3 text-white">
                    <PlayCircle size={20} className="text-blue-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Preview Session
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Section */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1 flex items-center gap-1">
                      <Zap size={10} fill="currentColor" /> {event.level}
                    </span>
                    <h3 className="text-xl font-black tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                      {event.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black italic">
                      {event.pricing}
                    </div>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <Star size={10} fill="black" />
                      <span className="text-[10px] font-black">
                        {event.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 py-4 border-y border-black/[0.05] my-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 border border-black/10 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/100?u=${event.host}`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-none">
                      {event.host}
                    </span>
                    <span className="text-[9px] text-gray-400 uppercase tracking-tighter mt-1">
                      {event.hostTitle}
                    </span>
                  </div>
                  <div className="ml-auto bg-black text-white px-2 py-1 text-[8px] font-black uppercase tracking-tighter">
                    {event.privacy}
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {event.description}
                </p>

                {/* Engagement Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={14} className="text-black" />
                    <span className="text-[11px] font-bold text-black uppercase">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={14} className="text-black" />
                    <span className="text-[11px] font-bold text-black uppercase">
                      {event.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users size={14} className="text-black" />
                    <span className="text-[11px] font-bold text-black uppercase">
                      {event.attendees.toLocaleString()} Enrolled
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Globe size={14} className="text-black" />
                    <span className="text-[11px] font-bold text-black uppercase">
                      {event.time}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-black py-4 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-black transition-all group/btn active:scale-[0.98]">
                  Claim Admission
                  <ChevronRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black px-6 py-12 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-xl font-black uppercase tracking-tighter">
            curvup.
          </span>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </div>
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
            © 2025 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CurvupProduction;
