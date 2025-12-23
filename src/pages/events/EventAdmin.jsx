import React, { useState } from "react";
import {
  Plus,
  MoreVertical,
  Search,
  ExternalLink,
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { eventsData } from "./eventsdata";
import CreateEvent from "./CreateEvent";

const EventAdmin = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  if (showCreate) return <CreateEvent onBack={() => setShowCreate(false)} />;

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-black antialiased">
      {/* --- PREMIUM NAV --- */}
      <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <img
              src="/curvuplogo.png"
              alt="Curvup"
              className="h-8 w-auto object-contain"
            />
            <div className="h-4 w-[1px] bg-gray-200 mx-2" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
              Console
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[12px] font-medium text-gray-500 hover:text-black transition-colors">
              Support
            </button>
            <button
              onClick={() => setShowCreate(true)}
              className="group flex items-center gap-2 rounded-full bg-[#0251FD] px-6 py-3 text-[12px] font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
              New Event
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-8 pt-32 pb-20">
        {/* --- DYNAMIC HEADER --- */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-black">
              Event Management
            </h1>
            <p className="mt-2 text-gray-500 text-sm">
              Manage and monitor your upcoming live experiences.
            </p>
          </div>

          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#0251FD]" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 rounded-2xl border border-gray-100 bg-gray-50/50 py-3.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-[#0251FD] focus:bg-white focus:ring-4 focus:ring-blue-500/5"
            />
          </div>
        </header>

        {/* --- EVENT GRID/LIST --- */}
        <div className="grid gap-4">
          <div className="flex items-center justify-between px-4 pb-4 border-b border-gray-50">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Live Inventory ({eventsData.length})
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Actions
            </span>
          </div>

          <div className="space-y-3">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="group relative flex items-center gap-6 rounded-[2rem] border border-gray-50 bg-white p-4 transition-all hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Image Container - Grayscale Removed */}
                <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-[1.25rem]">
                  <img
                    src={event.poster}
                    alt={event.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex flex-grow flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0251FD]">
                      {event.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1 text-[10px] font-medium text-gray-400">
                      <Calendar className="h-3 w-3" />
                      {event.dateTime.split("•")[0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-black group-hover:text-[#0251FD] transition-colors">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-bold uppercase text-green-600">
                      <span className="h-1 w-1 rounded-full bg-green-600" />
                      {event.visibility}
                    </span>
                  </div>
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex items-center gap-2 px-4">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-gray-400 transition-all hover:border-black hover:text-black">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-gray-400 transition-all hover:border-black hover:text-black">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>

                {/* Mobile Chevron */}
                <div className="md:hidden">
                  <ChevronRight className="h-5 w-5 text-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- FOOTER BRanding --- */}
      <footer className="mt-20 border-t border-gray-50 py-12 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300">
          Powered by Curvup Engine
        </p>
      </footer>
    </div>
  );
};

export default EventAdmin;
