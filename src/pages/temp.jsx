import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added this
import { events } from "./data";
import {
  Search,
  Bell,
  Users,
  Ticket,
  Globe,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const CurvupLanding = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleCardClick = (path) => {
    navigate(`/${path}`); // Use navigate instead of window.location
  };

  return (
    <div
      className="min-h-screen bg-[#FAFAFB] text-[#1a1a1a]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-8">
            <img
              src="/curvuplogo.png"
              alt="Curvup Logo"
              onClick={() => navigate("/")}
              className="h-9 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>

          {/* Search Bar */}
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

          {/* Right Side: Notifications & Profile */}
          <div className="flex items-center gap-5">
            <button className="relative p-2.5 text-gray-500 hover:bg-gray-100 rounded-xl transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>

            <div className="h-8 w-[1px] bg-gray-200 mx-1"></div>

            {/* Clickable Profile to go to /myevents */}
            <button
              onClick={() => navigate("/myevents")}
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

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white pt-20 pb-16 border-b border-gray-50">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-3xl opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-[900] leading-[1] tracking-tight mb-8 text-gray-900 max-w-4xl">
            Where the world's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Top 1%
            </span>{" "}
            teaches.
          </h2>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 py-20">
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

export default CurvupLanding;
