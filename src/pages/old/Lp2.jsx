import React, { useState } from "react";
import {
  Search,
  User,
  Calendar,
  Globe,
  Shield,
  Users,
  ArrowRight,
  Clock,
  Star,
  Zap,
  Bell,
  Plus,
  Command,
  Eye,
  Lock,
  Unlock,
  Wifi,
} from "lucide-react";

const CurvupElite = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const masterclasses = [
    {
      id: "M-01",
      name: "Neural Design Patterns",
      host: "Qadir Killedar",
      poster:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
      type: "Online",
      privacy: "Public",
      description:
        "A masterclass on building self-healing infrastructure using AI-driven DevOps pipelines and custom LLM monitors.",
      date: "Dec 28, 2025",
      time: "10:00 AM",
      pricing: "Free",
      attendees: "1.2k",
    },
    {
      id: "M-02",
      name: "High-Ticket Brand Strategy",
      host: "Julianne Vane",
      poster:
        "https://images.unsplash.com/photo-1493421416290-99a87242ad27?q=80&w=2000",
      type: "Hybrid",
      privacy: "Private",
      description:
        "Decoding the psychology of luxury. How to position your services for the top 1% of the global market.",
      date: "Jan 05, 2026",
      time: "02:30 PM",
      pricing: "$299",
      attendees: "850",
    },
    {
      id: "M-03",
      name: "Quantum Security Protocol",
      host: "Dr. Aris Noble",
      poster:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
      type: "Offline",
      privacy: "Public",
      description:
        "Practical encryption strategies for the post-quantum era. Protecting distributed ledgers from future threats.",
      date: "Jan 12, 2026",
      time: "09:00 AM",
      pricing: "$450",
      attendees: "320",
    },
    {
      id: "M-04",
      name: "Fullstack Architecture",
      host: "Marcus Thorne",
      poster:
        "https://images.unsplash.com/photo-1451187534959-595693f1522b?q=80&w=2000",
      type: "Online",
      privacy: "Public",
      description:
        "The complete blueprint for building scalable, typesafe, and high-concurrency web applications from scratch.",
      date: "Jan 18, 2026",
      time: "11:00 AM",
      pricing: "Free",
      attendees: "4.2k",
    },
    {
      id: "M-05",
      name: "Venture Deal Engineering",
      host: "Sarah Tavel",
      poster:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2000",
      type: "Hybrid",
      privacy: "Private",
      description:
        "Mastering the mechanics of fundraising, term sheets, and cap table optimization for high-growth startups.",
      date: "Feb 02, 2026",
      time: "04:00 PM",
      pricing: "$999",
      attendees: "150",
    },
    {
      id: "M-06",
      name: "Minimalist Brand Systems",
      host: "Dieter Rams Jr.",
      poster:
        "https://images.unsplash.com/photo-1506443332154-41a3974bc279?q=80&w=2000",
      type: "Online",
      privacy: "Public",
      description:
        "Developing a visual language that lasts decades. The art of subtraction in modern product identity.",
      date: "Feb 10, 2026",
      time: "10:00 AM",
      pricing: "Free",
      attendees: "1.1k",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* HUD Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white border-b border-black h-16">
        <div className="max-w-full mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-16">
            <h1 className="text-2xl font-black uppercase tracking-tighter">
              Curvup<span className="text-blue-600">_</span>
            </h1>
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                  Server: Active
                </span>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                Protocol: 8080
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 flex-1 justify-end">
            <div className="relative group max-w-sm w-full hidden md:block">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4" />
              <input
                type="text"
                placeholder="EXECUTE SEARCH..."
                className="w-full bg-transparent border-b border-black/10 focus:border-blue-600 py-2 pl-8 pr-4 text-[11px] font-black focus:outline-none transition-all uppercase"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4 pl-8 border-l border-black">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black leading-none">
                  QADIR KILLEDAR
                </p>
                <p className="text-[9px] font-medium text-blue-600 mt-1 uppercase tracking-tighter">
                  Level: Admin
                </p>
              </div>
              <div className="w-10 h-10 bg-black flex items-center justify-center text-white rounded-none hover:bg-blue-600 transition-colors cursor-pointer">
                <User size={18} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Kinetic Hero */}
      <header className="relative pt-40 pb-24 px-8 border-b border-black">
        <div className="absolute top-20 right-[-5%] text-[240px] font-black text-gray-50 select-none -z-10 leading-none">
          CURVUP
        </div>
        <div className="max-w-6xl">
          <div className="inline-flex items-center gap-3 bg-black text-white px-3 py-1 mb-10">
            <Zap size={14} fill="currentColor" className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Masterclass_001
            </span>
          </div>
          <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-12">
            Skill <br /> <span className="text-blue-600">Transference</span>{" "}
            <br /> Engine.
          </h1>
          <p className="text-xl font-bold max-w-xl leading-snug border-l-4 border-black pl-8">
            The world's most aggressive learning platform for architects,
            engineers, and market leaders. No theory. Only production.
          </p>
        </div>
      </header>

      {/* Production Grid */}
      <main className="max-w-full mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {masterclasses.map((item) => (
            <div key={item.id} className="group relative">
              {/* Horizontal Poster - 16:10 FIXED */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border-2 border-black group-hover:border-blue-600 transition-colors">
                <img
                  src={item.poster}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Floating HUD Badges */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-white px-2 py-1 text-[9px] font-black uppercase tracking-widest border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {item.id}
                    </span>
                    {item.privacy === "Private" ? (
                      <Lock size={16} className="text-white drop-shadow-lg" />
                    ) : (
                      <Unlock size={16} className="text-white drop-shadow-lg" />
                    )}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="bg-blue-600 text-white px-2 py-1 text-[10px] font-black uppercase flex items-center gap-2">
                      <Wifi size={12} /> {item.type}
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Content */}
              <div className="mt-8 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter leading-none flex-1 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-2xl font-black italic tracking-tighter text-blue-600">
                    {item.pricing === "Free" ? "0.00" : item.pricing}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-black flex items-center justify-center overflow-hidden border border-black group-hover:rotate-12 transition-transform">
                    <img
                      src={`https://i.pravatar.cc/100?u=${item.host}`}
                      alt=""
                    />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest border-b-2 border-black pb-0.5">
                    {item.host}
                  </span>
                </div>

                <p className="text-gray-400 text-sm font-bold leading-tight mb-8 line-clamp-2 uppercase">
                  {item.description}
                </p>

                {/* Technical Data Block */}
                <div className="grid grid-cols-2 border-t-2 border-black pt-6 gap-8">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-1">
                      <Calendar size={10} /> Schedule
                    </span>
                    <p className="text-xs font-black uppercase">
                      {item.date} <br /> {item.time}
                    </p>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-1 justify-end">
                      Enrolled <Users size={10} />
                    </span>
                    <p className="text-xs font-black uppercase">
                      {item.attendees} <br /> ACTIVE_STUDENTS
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <button className="mt-8 w-full bg-black text-white py-5 px-6 font-black text-xs uppercase tracking-[0.4em] flex items-center justify-between group/btn overflow-hidden relative border-2 border-black hover:bg-white hover:text-black transition-all">
                  <span className="relative z-10">Initialize Access</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover/btn:translate-x-2 transition-transform"
                  />
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-blue-600 group-hover/btn:left-0 transition-all duration-300 -z-0"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Massive Footer */}
      <footer className="bg-black text-white pt-32 pb-16 px-8 overflow-hidden relative">
        <div className="absolute top-10 right-[-10%] text-[400px] font-black text-white/5 select-none leading-none">
          CURVUP
        </div>
        <div className="max-w-full flex flex-col lg:flex-row justify-between items-end gap-20">
          <div className="max-w-xl z-10">
            <h4 className="text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              Stay <br /> Ahead_
            </h4>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] max-w-xs">
              THE PLATFORM FOR INDIVIDUALS WHO DEMAND TOTAL ARCHITECTURAL
              DOMINANCE.
            </p>
          </div>
          <div className="flex gap-20 z-10">
            <div className="space-y-4">
              <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">
                Index
              </p>
              <ul className="text-xs font-black space-y-2 uppercase">
                <li className="hover:text-blue-600 cursor-pointer">Catalog</li>
                <li className="hover:text-blue-600 cursor-pointer">Security</li>
                <li className="hover:text-blue-600 cursor-pointer">Privacy</li>
              </ul>
            </div>
            <div className="space-y-4 text-right">
              <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">
                Connect
              </p>
              <ul className="text-xs font-black space-y-2 uppercase">
                <li className="hover:text-blue-600 cursor-pointer">GitHub</li>
                <li className="hover:text-blue-600 cursor-pointer">LinkedIn</li>
                <li className="hover:text-blue-600 cursor-pointer">
                  X_Protocol
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase text-gray-600 tracking-widest">
          <span>System v.4.0.2</span>
          <span>© 2025 Curvup Corp. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default CurvupElite;
