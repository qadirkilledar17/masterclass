import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { eventsData } from "./eventsdata";

const EventLandingpage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white text-black font-['Poppins']">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="/curvuplogo.png" alt="Curvp" className="h-6 w-auto" />

            {/* Cooler Search Bar */}
            <div className="relative hidden md:block group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
              <input
                type="text"
                placeholder="Search experiences..."
                className="pl-11 pr-6 py-2 bg-gray-50 border border-transparent rounded-full w-[260px] focus:w-[320px] focus:bg-white focus:border-black/10 outline-none transition-all duration-300 font-normal text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-[#0251FD] rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* --- OUT-OF-THE-BOX COMPACT HERO --- */}
      <header className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-gray-200 pb-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-[#0251FD] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Live Experience Engine
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] inline-block">
              CURVP
              <br />
              EVENTS<span className="text-[#0251FD]">.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex flex-col gap-2 text-left lg:text-right">
              <div className="flex lg:justify-end -space-x-2 mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-black text-white text-[10px] flex items-center justify-center font-bold">
                  +2k
                </div>
              </div>
              <p className="text-sm font-medium leading-tight">
                Join 12,000+ builders <br />
                <span className="text-gray-400 font-normal italic">
                  attending masterclasses this week.
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* --- EVENT GRID --- */}
      <main className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="group flex flex-col h-full bg-white border border-gray-100 hover:border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 rounded-3xl overflow-hidden"
            >
              {/* Poster Container (Clean) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={event.poster}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Visibility & Location Badges moved here */}
                <div className="flex gap-2 mb-4">
                  <span className="px-2.5 py-1 border border-gray-200 text-[9px] font-bold uppercase tracking-widest rounded-md text-gray-500">
                    {event.locationType}
                  </span>
                  <span className="px-2.5 py-1 bg-gray-50 text-[9px] font-bold uppercase tracking-widest rounded-md text-gray-900">
                    {event.visibility}
                  </span>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest mb-1">
                      {event.category}
                    </p>
                    <h3 className="text-xl font-semibold leading-tight text-black transition-none">
                      {event.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">{event.price}</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm font-normal line-clamp-2 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Metadata with Gray Icons */}
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {event.dateTime}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <Users className="w-4 h-4 text-gray-400" />
                    {event.attendees.toLocaleString()} attending
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    Host: <span className="text-black">{event.host}</span>
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl border-2 border-[#0251FD] text-[#0251FD] font-semibold flex items-center justify-center gap-2 hover:bg-[#0251FD] hover:text-white transition-all duration-300">
                  Register Now
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-[10px] font-medium tracking-[0.3em] uppercase">
          Built for Curvp Ecosystem
        </p>
      </footer>
    </div>
  );
};

export default EventLandingpage;
