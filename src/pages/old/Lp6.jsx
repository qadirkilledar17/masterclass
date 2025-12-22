import React, { useState } from "react";
import {
  Search,
  User,
  Calendar,
  Globe,
  Shield,
  Users,
  Clock,
  ArrowRight,
  Star,
  MoreHorizontal,
} from "lucide-react";

const CurvupMasterclass = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: 1,
      name: "Modern DevOps Architecture",
      host: "Qadir Killedar",
      poster:
        "https://images.unsplash.com/photo-1451187534959-595693f1522b?auto=format&fit=crop&q=80&w=800",
      type: "Online",
      privacy: "Public",
      description:
        "Implementing resilient CI/CD pipelines and automated scaling strategies for global infrastructure.",
      dateTime: "Dec 28 • 10:00 AM",
      pricing: "Free",
      attendees: "1,240",
    },
    {
      id: 2,
      name: "UI/UX Visual Hierarchy",
      host: "Sarah Jenkins",
      poster:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      type: "Hybrid",
      privacy: "Private",
      description:
        "Mastering the principles of white space, typography, and contrast to build world-class interfaces.",
      dateTime: "Jan 04 • 02:00 PM",
      pricing: "$120",
      attendees: "850",
    },
    {
      id: 3,
      name: "Venture Capital Deal Flow",
      host: "Marcus Thorne",
      poster:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      type: "Offline",
      privacy: "Public",
      description:
        "Deep dive into term sheets, liquidation preferences, and startup valuation mechanics.",
      dateTime: "Jan 12 • 11:30 AM",
      pricing: "$450",
      attendees: "320",
    },
    {
      id: 4,
      name: "High-Performance Go",
      host: "Alex Rivers",
      poster:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      type: "Online",
      privacy: "Public",
      description:
        "Building ultra-fast concurrent services using Go channels, routines, and memory management.",
      dateTime: "Jan 18 • 09:00 AM",
      pricing: "Free",
      attendees: "3,100",
    },
    {
      id: 5,
      name: "Luxury Brand Strategy",
      host: "Elena Vane",
      poster:
        "https://images.unsplash.com/photo-1493421416290-99a87242ad27?auto=format&fit=crop&q=80&w=800",
      type: "Hybrid",
      privacy: "Private",
      description:
        "How to position high-ticket services and build a brand identity for the ultra-premium market.",
      dateTime: "Feb 02 • 04:00 PM",
      pricing: "$299",
      attendees: "150",
    },
    {
      id: 6,
      name: "Next.js 15 Foundations",
      host: "Lee Robinson",
      poster:
        "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=800",
      type: "Online",
      privacy: "Public",
      description:
        "Advanced Server Components, streaming patterns, and optimizing Core Web Vitals at scale.",
      dateTime: "Feb 10 • 10:00 AM",
      pricing: "Free",
      attendees: "5,400",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white">
      {/* HEADER: Minimal & High-Contrast */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-black tracking-tighter uppercase">
              Curvup
            </h1>
            <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
            <div className="hidden md:flex gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              <a
                href="#"
                className="text-black hover:text-blue-600 transition-colors"
              >
                Browse
              </a>
              <a href="#" className="hover:text-black">
                Schedule
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-1 justify-end">
            <div className="relative w-full max-w-[280px] hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Find a masterclass..."
                className="w-full bg-gray-50 border border-gray-100 rounded-md py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white ring-2 ring-white ring-offset-2 hover:bg-blue-600 cursor-pointer transition-colors">
                <User size={16} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* COMPACT SECTION HEADER */}
      <header className="pt-32 pb-12 px-6 max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between border-b border-black pb-6">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-2">
              Upcoming Sessions
            </h2>
            <h3 className="text-4xl font-black tracking-tighter uppercase">
              Masterclasses
            </h3>
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase hidden md:block">
            Total 24 Classes / 6 Shown
          </p>
        </div>
      </header>

      {/* GRID: Reduced card sizes with high density */}
      <main className="max-w-[1280px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col bg-white border border-gray-100 hover:border-blue-600 transition-all duration-300"
            >
              {/* Image: No filter, Pure 16:10 */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                <img
                  src={event.poster}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* HUD Labels */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="bg-white/95 backdrop-blur px-2 py-1 text-[9px] font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {event.type}
                  </span>
                  <span className="bg-black text-white px-2 py-1 text-[9px] font-black uppercase tracking-widest border border-black">
                    {event.privacy}
                  </span>
                </div>
              </div>

              {/* Data Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-black leading-tight tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                    {event.name}
                  </h4>
                  <span className="text-blue-600 font-black text-sm">
                    {event.pricing}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/100?u=${event.host}`}
                      alt=""
                    />
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Host: {event.host}
                  </span>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
                  {event.description}
                </p>

                {/* Engagement Metrics */}
                <div className="mt-auto flex items-center justify-between py-3 border-t border-gray-50 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-blue-600" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      {event.dateTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={12} className="text-blue-600" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      {event.attendees}
                    </span>
                  </div>
                </div>

                {/* Button: Solid Blue, Sharp Corners */}
                <button className="w-full bg-blue-600 text-white font-black py-3.5 text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-[0.98]">
                  Reserve My Spot
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm font-black uppercase tracking-tighter">
            Curvup
          </span>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
            <a href="#" className="hover:text-black">
              Support
            </a>
          </div>
          <p className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">
            © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CurvupMasterclass;
