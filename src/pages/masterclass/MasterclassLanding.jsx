import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { events } from "./data";
import {
  Search,
  Bell,
  Globe,
  Clock,
  ChevronRight,
  Sparkles,
  Ticket,
  Zap,
  TrendingUp,
  Activity,
} from "lucide-react";

const MasterclassLanding = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(`/masterclass/${path}`);
  };

  return (
    <div
      className="min-h-screen bg-[#FAFAFB] text-[#1a1a1a] selection:bg-blue-100"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/curvuplogo.png"
              alt="Curvup Logo"
              onClick={() => navigate("/")}
              className="h-9 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-10">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="Search premium workshops..."
                className="w-full bg-gray-100/50 border-transparent border rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative p-2.5 text-gray-500 hover:bg-gray-100 rounded-xl transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200 mx-1"></div>
            <button
              onClick={() => navigate("/mymasterclass")}
              className="flex items-center gap-3 p-1 pr-3 hover:bg-gray-100 rounded-full transition-all group"
            >
              <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                QK
              </div>
              <div className="text-left hidden lg:block">
                <p className="text-[11px] font-bold text-gray-900 leading-none">
                  Qadir Killedar
                </p>
                <p className="text-[9px] text-blue-600 font-bold uppercase tracking-tighter">
                  Pro Member
                </p>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* NEW DYNAMIC HERO SECTION */}
      <header className="relative bg-white pt-10 pb-10 border-b border-gray-100 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-indigo-100/40 rounded-full blur-[100px]"></div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="bg-gray-900/5 backdrop-blur-sm border border-gray-200/50 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-blue-200">
                <Activity size={12} className="animate-pulse" /> Live Sessions
              </div>
              <h2 className="text-4xl md:text-5xl font-[900] leading-tight tracking-tight text-gray-900 mb-4">
                Learn from the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  World's Top 1%
                </span>
              </h2>
              <p className="text-gray-500 font-medium text-sm md:text-base max-w-md">
                No fluff. Just raw architecture and production-grade code taught
                by industry architects.
              </p>
            </div>

            {/* Right Dynamic Widget */}
            <div className="hidden lg:flex flex-col gap-4 w-72">
              <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xl shadow-blue-900/5 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <TrendingUp size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Next Masterclass
                  </span>
                </div>
                <p className="text-xs font-bold leading-snug">
                  Advanced System Architecture 2024
                </p>
                <div className="mt-3 flex justify-between items-center text-[10px] font-bold text-blue-600">
                  <span>Starts in 2h 40m</span>
                  <Zap size={10} className="fill-current" />
                </div>
              </div>

              <div className="bg-blue-600 p-4 rounded-3xl shadow-xl shadow-blue-200 -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex -space-x-2 mb-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      className="w-6 h-6 rounded-full border-2 border-blue-600 bg-gray-200"
                      alt="user"
                    />
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center text-[8px] text-blue-600 font-black">
                    +2k
                  </div>
                </div>
                <p className="text-white text-[10px] font-black uppercase tracking-widest leading-none">
                  Active Engineers Learning Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <Sparkles size={14} className="text-blue-600" /> Featured Workshops
          </h4>
          <div className="h-[1px] flex-1 bg-gray-100 mx-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => handleCardClick(event.path)}
              className="group relative cursor-pointer flex flex-col h-full bg-white rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)]"
            >
              <div className="relative aspect-[4/3] m-4 overflow-hidden rounded-[32px]">
                <img
                  src={event.poster}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md text-black px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-xl">
                    {event.type}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white text-xs font-bold flex items-center gap-2">
                    <Globe size={14} /> Join Workshop
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 flex flex-col flex-1">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-3">
                    {event.pricing}
                  </div>
                  <h3 className="text-xl font-black leading-tight group-hover:text-blue-600 transition-colors">
                    {event.name}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                  {event.shortDescription}
                </p>

                <div className="flex items-center justify-between mt-auto p-4 rounded-[24px] bg-gray-50/50 group-hover:bg-blue-50/30 transition-colors border border-gray-100/50">
                  <div className="flex items-center gap-2 text-gray-500 font-bold">
                    <Clock size={14} className="text-blue-600" />
                    <span className="text-[10px] uppercase tracking-tighter">
                      {event.dateTime}
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?u=${event.id + i}`}
                          alt="user"
                        />
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-black flex items-center justify-center text-[8px] text-white font-black">
                      +{event.attendees > 999 ? "1k" : event.attendees}
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-white border-2 border-blue-600 text-blue-600 font-black py-4 rounded-[20px] hover:bg-blue-600 hover:text-white hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 text-sm flex items-center justify-center gap-3 group/btn">
                  Reserve Spot
                  <Ticket
                    size={20}
                    className="group-hover/btn:rotate-12 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <img
            src="/curvuplogo.png"
            alt="Curvup"
            className="h-7 opacity-20 grayscale"
          />
          <p className="text-[10px] text-gray-300 font-black tracking-[0.3em] uppercase">
            © 2025 CURVUP TECHNOLOGY GROUP.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MasterclassLanding;
