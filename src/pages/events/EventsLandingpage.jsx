import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added
import {
  Search,
  Bell,
  User,
  Calendar,
  MapPin,
  Users,
  ArrowUpRight,
  Zap,
  Globe,
} from "lucide-react";
import { eventsData } from "./eventsdata";

const EventLandingpage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Helper to create URL slug
  const createSlug = (name) =>
    name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <div className="min-h-screen bg-white text-black font-['Poppins']">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <img src="/curvuplogo.png" alt="Curvp" className="h-6 w-auto" />
            <div className="relative hidden group md:block">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#0251FD]" />
              <input
                type="text"
                placeholder="Search experiences..."
                className="w-[260px] rounded-full border border-transparent bg-gray-50 py-2 pl-11 pr-6 text-sm outline-none transition-all duration-300 focus:w-[320px] focus:border-[#0251FD]/20 focus:bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            {/* My Events Link */}
            <button
              onClick={() => navigate("/myevents")}
              className="text-xs font-bold uppercase tracking-widest hover:text-[#0251FD] transition-colors"
            >
              My Events
            </button>
            <button className="relative rounded-full p-2 transition-colors hover:bg-gray-100">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-[#0251FD]" />
            </button>
            <div className="group flex cursor-pointer items-center gap-3 border-l border-gray-100 pl-4">
              <span className="hidden text-sm font-black tracking-tight transition-colors group-hover:text-[#0251FD] sm:block">
                QADIR KILLEDAR
              </span>
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-black ring-2 ring-transparent transition-all group-hover:ring-[#0251FD]">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO --- (Kept original logic) */}
      <header className="mx-auto max-w-7xl px-6 pb-10 pt-24">
        <div className="group relative overflow-hidden rounded-[2rem] border border-gray-900 bg-black">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 bg-[#0251FD] opacity-20 blur-[120px] transition-opacity duration-700 group-hover:opacity-30" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-between border-b border-white/10 p-8 md:p-12 lg:col-span-7 lg:border-b-0 lg:border-r">
              <h1 className="mb-6 text-6xl font-black leading-[0.8] tracking-tighter text-white md:text-8xl">
                LIVE <br />
                <span className="bg-gradient-to-r from-[#0251FD] to-white bg-clip-text italic text-transparent">
                  EVENTS.
                </span>
              </h1>
              <div className="mt-4 flex items-center gap-6">
                <button className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-black text-black transition-all duration-300 hover:bg-[#0251FD] hover:text-white">
                  BOOK NOW <ArrowUpRight className="h-4 w-4" />
                </button>
                <div className="hidden md:block">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Total Members
                  </p>

                  <p className="text-xl font-black text-white">12.8K+</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:col-span-5">
              <div className="relative overflow-hidden whitespace-nowrap border-b border-white/10 bg-white/5 p-8">
                <div className="animate-marquee flex gap-8">
                  {[
                    "DESIGN CONFS",
                    "DEV MEETUPS",
                    "AI SUMMITS",
                    "WEB3 HACKATHONS",
                  ].map((txt, i) => (
                    <span
                      key={i}
                      className="text-4xl font-black italic tracking-tighter text-white/20"
                    >
                      {txt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid flex-grow grid-cols-2">
                <div className="group/box border-r border-white/10 p-8 transition-colors hover:bg-white/5">
                  <Globe className="mb-4 h-6 w-6 text-[#0251FD]" />
                  <p className="text-2xl font-black uppercase tracking-tighter text-white">
                    Global
                  </p>
                </div>
                <div className="group/box p-8 transition-colors hover:bg-white/5">
                  <Zap className="mb-4 h-6 w-6 text-[#0251FD]" />
                  <p className="text-2xl font-black uppercase tracking-tighter text-white">
                    Instant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .animate-marquee {
        display: flex;
        width: 200%;
        animation: marquee 20s linear infinite;
      }
    `,
          }}
        />
      </header>

      {/* --- EVENT GRID --- */}
      <main className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <div
              key={event.id}
              onClick={() =>
                navigate(`/events/${createSlug(event.name)}`, {
                  state: { event },
                })
              }
              className="group cursor-pointer flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={event.poster}
                  alt={event.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-grow flex-col p-8">
                <div className="mb-4 flex gap-2">
                  <span className="rounded-md border border-gray-200 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                    {event.locationType}
                  </span>
                  <span className="rounded-md bg-gray-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-gray-900">
                    {event.visibility}
                  </span>
                </div>
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                      {event.category}
                    </p>
                    <h3 className="text-xl font-semibold leading-tight">
                      {event.name}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold">{event.price}</p>
                </div>
                <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-500">
                  {event.description}
                </p>
                <div className="mb-8 flex flex-grow flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    {event.dateTime}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    {event.attendees.toLocaleString()} attending
                  </div>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#0251FD] py-4 font-semibold text-[#0251FD] transition-all duration-300 group-hover:bg-[#0251FD] group-hover:text-white">
                  View Details
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventLandingpage;
