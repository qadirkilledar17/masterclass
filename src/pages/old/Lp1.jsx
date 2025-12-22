import React, { useState, useEffect } from "react";
import {
  Search,
  Bell,
  User,
  ArrowUpRight,
  Globe,
  MapPin,
  Unlock,
  Lock,
  Calendar,
  Clock,
  Users,
  Plus,
  Command,
  Filter,
  CheckCircle,
  Share2,
  Heart,
} from "lucide-react";

const CurvupProduction = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const events = [
    {
      id: "CVP-8801",
      name: "Mastering Cloud-Native DevOps",
      host: "Qadir Killedar",
      role: "DevOps Engineer",
      type: "Offline",
      visibility: "Public",
      description:
        "Implementing K8s clusters and Terraform workflows at enterprise scale.",
      date: "DEC 24, 2025",
      time: "10:00 AM",
      price: "FREE",
      attendees: "1,240",
      img: "https://images.unsplash.com/photo-1667372333374-0d3c6dd6a56c?q=80&w=600",
    },
    {
      id: "CVP-8802",
      name: "High-Performance Node.js",
      host: "Sarah Drasner",
      role: "VP of Engineering",
      type: "Online",
      visibility: "Private",
      description:
        "Mastering the event loop, worker threads, and memory profiling.",
      date: "JAN 02, 2026",
      time: "09:00 PM",
      price: "$199",
      attendees: "850",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=600",
    },
    {
      id: "CVP-8803",
      name: "Spatial UI & Reality Design",
      host: "Imran Chaudhri",
      role: "Designer",
      type: "Hybrid",
      visibility: "Public",
      description: "Designing for visionOS and spatial computing paradigms.",
      date: "JAN 15, 2026",
      time: "11:00 AM",
      price: "$450",
      attendees: "340",
      img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=600",
    },
    {
      id: "CVP-8804",
      name: "Tokenomics for Real Estate",
      host: "Marcus Ra",
      role: "Web3 Strategist",
      type: "Online",
      visibility: "Public",
      description: "Fractional ownership models for global property markets.",
      date: "JAN 22, 2026",
      time: "06:00 PM",
      price: "FREE",
      attendees: "2.1k",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600",
    },
    {
      id: "CVP-8805",
      name: "Modern Brand Minimalism",
      host: "Sophia V.",
      role: "Creative Director",
      type: "Offline",
      visibility: "Private",
      description: "Building iconic identities through subtraction and focus.",
      date: "FEB 05, 2026",
      time: "02:00 PM",
      price: "$800",
      attendees: "120",
      img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=600",
    },
    {
      id: "CVP-8806",
      name: "LLM Fine-Tuning Workshop",
      host: "Alex Rivest",
      role: "AI Researcher",
      type: "Hybrid",
      visibility: "Public",
      description: "Training custom models for enterprise-specific data sets.",
      date: "FEB 12, 2026",
      time: "09:00 AM",
      price: "$120",
      attendees: "500",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* 1. THE GLASS NAVIGATION */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "h-16 bg-white/80 backdrop-blur-xl border-b border-black/5"
            : "h-24 bg-white"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                <div className="w-4 h-4 bg-blue-600 rotate-45" />
              </div>
              <span className="font-black text-2xl tracking-[ -0.05em] uppercase">
                CURVUP
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
              <a
                href="#"
                className="text-black border-b-2 border-blue-600 pb-1"
              >
                Discover
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Experience
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Network
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* The Ultra-Cool Search */}
            <div
              className={`relative flex items-center group transition-all duration-500 ${
                searchFocused ? "w-[400px]" : "w-[240px]"
              }`}
            >
              <Search
                className={`absolute left-4 transition-colors ${
                  searchFocused ? "text-blue-600" : "text-gray-400"
                }`}
                size={16}
              />
              <input
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                type="text"
                placeholder="Find an experience..."
                className="w-full bg-gray-50 border border-black/5 py-3 pl-12 pr-12 text-[10px] font-bold uppercase tracking-widest focus:ring-4 focus:ring-blue-600/5 focus:bg-white focus:border-blue-600 outline-none transition-all rounded-full"
              />
              <div className="absolute right-4 flex items-center gap-1 opacity-30">
                <Command size={12} />
                <span className="text-[10px] font-bold">K</span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-6 pl-4 border-l border-black/5">
              <Bell
                size={20}
                className="text-gray-400 cursor-pointer hover:text-black transition-colors"
              />
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase leading-none mb-1">
                    Q. Killedar
                  </p>
                  <p className="text-[9px] font-bold text-blue-600 uppercase tracking-tighter">
                    Pro Member
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://ui-avatars.com/api/?name=Q+K&background=000&color=fff&bold=true"
                    className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-blue-600 transition-all p-0.5"
                    alt="profile"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. MAIN DASHBOARD AREA */}
      <main className="max-w-[1600px] mx-auto px-6 pt-40 pb-20">
        {/* Animated Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.8]">
              Masterclass
              <br />
              <span className="text-blue-600">Directory.</span>
            </h2>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600" /> Curated for
              Excellence
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-black px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              <Filter size={14} /> Sort & Filter
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl shadow-blue-600/30 hover:bg-black transition-all group">
              <Plus
                size={16}
                className="group-hover:rotate-90 transition-transform"
              />{" "}
              Create
            </button>
          </div>
        </div>

        {/* 3. THE HIGH-DENSITY GRID (6 Small Sexy Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white border border-black/5 hover:border-black/20 transition-all duration-500 rounded-[2rem] overflow-hidden flex flex-col p-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
            >
              {/* Card Media Wrapper */}
              <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden">
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Immersive Badge Overlays */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <div className="backdrop-blur-md bg-white/80 border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm pointer-events-auto">
                        {event.type === "Online" ? (
                          <Globe size={10} className="text-blue-600" />
                        ) : (
                          <MapPin size={10} className="text-blue-600" />
                        )}
                        <span className="text-[9px] font-black uppercase tracking-widest">
                          {event.type}
                        </span>
                      </div>
                      <div
                        className={`backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-sm pointer-events-auto ${
                          event.visibility === "Private"
                            ? "bg-black/80 text-white"
                            : "bg-white/80 text-black"
                        }`}
                      >
                        {event.visibility === "Public" ? (
                          <Unlock size={10} />
                        ) : (
                          <Lock size={10} />
                        )}
                        <span className="text-[9px] font-black uppercase tracking-widest">
                          {event.visibility}
                        </span>
                      </div>
                    </div>
                    <button className="p-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all pointer-events-auto">
                      <Heart size={14} />
                    </button>
                  </div>

                  <div className="flex justify-between items-end">
                    <div
                      className={`px-4 py-1.5 rounded-lg text-[11px] font-black tracking-widest border border-white/20 backdrop-blur-md ${
                        event.price === "FREE"
                          ? "bg-blue-600 text-white"
                          : "bg-black text-white"
                      }`}
                    >
                      {event.price}
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Engine Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-black/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://ui-avatars.com/api/?name=${event.host}&background=fff&color=000&bold=true`}
                      alt="host"
                    />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-tight flex items-center gap-1">
                      {event.host}{" "}
                      <CheckCircle
                        size={10}
                        className="text-blue-600 fill-blue-600/10"
                      />
                    </h4>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                      {event.role}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tighter leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {event.name}
                </h3>

                <p className="text-[11px] text-gray-400 font-medium leading-relaxed mb-8 line-clamp-2">
                  {event.description}
                </p>

                {/* THE TECHNICAL GRID (Data Density) */}
                <div className="mt-auto grid grid-cols-2 gap-px bg-black/5 border border-black/5 rounded-2xl overflow-hidden">
                  <div className="bg-white p-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={12} />
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">
                        Schedule
                      </span>
                    </div>
                    <span className="text-[10px] font-black uppercase">
                      {event.date}
                    </span>
                  </div>
                  <div className="bg-white p-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users size={12} />
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">
                        Community
                      </span>
                    </div>
                    <span className="text-[10px] font-black uppercase">
                      {event.attendees} Joined
                    </span>
                  </div>
                </div>

                {/* The Sexy Action Button */}
                <button className="mt-6 w-full h-14 bg-blue-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all hover:bg-black hover:shadow-2xl hover:shadow-black/20 group/btn relative overflow-hidden">
                  <span className="relative z-10">Initialize Session</span>
                  <ArrowUpRight
                    size={18}
                    className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER DATA BAR */}
      <footer className="border-t border-black/5 py-12 px-6 bg-gray-50/30">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Architecture
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CurvupProduction;
