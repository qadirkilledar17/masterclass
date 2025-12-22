import React, { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  Users,
  ArrowUpRight,
  Play,
  Zap,
  Globe,
  ShieldCheck,
  Filter,
} from "lucide-react";

const MasterclassLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const masterclasses = [
    {
      id: "01",
      name: "Visual Storytelling for the Next Decade",
      type: "Pro Workshop",
      host: "Elias Sterling",
      description:
        "Breaking the rules of traditional cinematography to create visceral, high-impact digital experiences.",
      dateTime: "24.12.25 // 18:00",
      price: "$120",
      attendees: "1.2k",
      poster:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      tag: "Live Now",
    },
    {
      id: "02",
      name: "The Architecture of Sound Design",
      type: "Technical",
      host: "Lena Vought",
      description:
        "How to engineer auditory environments that manipulate emotion and guide user behavior in VR.",
      dateTime: "28.12.25 // 09:00",
      price: "$85",
      attendees: "840",
      poster:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
      tag: "Top Rated",
    },
    {
      id: "03",
      name: "Strategic Brand Manipulation",
      type: "Masterclass",
      host: "Arthur Penn",
      description:
        "Moving beyond logos. Learn the psychological triggers that build cult-like brand loyalty.",
      dateTime: "05.01.26 // 14:00",
      price: "$210",
      attendees: "2.5k",
      poster:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      tag: "Limited",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white">
      {/* BACKGROUND TEXTURE */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl py-4 border-black/10"
            : "bg-transparent py-8 border-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              MSTR.CLSS
            </span>
            <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              <a href="#" className="hover:text-black transition-colors">
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

          <div className="flex items-center gap-6">
            <button className="text-[10px] font-bold uppercase tracking-widest hover:line-through">
              Sign In
            </button>
            <button className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-blue-600 transition-all">
              Join Membership
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-44 pb-20 px-8 max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">
                The Future of Learning
              </span>
            </div>
            <h1 className="text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              UNLIMITED <br />
              <span className="text-white drop-shadow-[2px_2px_0_#000] [-webkit-text-stroke:1px_black]">
                MASTERY.
              </span>
            </h1>
          </div>

          <div className="lg:w-1/3 pb-6">
            <p className="text-lg leading-tight mb-8 font-medium">
              Access the mental models, frameworks, and workflows of the world's
              most influential creative minds.
            </p>
            {/* COOLER SEARCH BAR */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-xl blur-lg opacity-0 group-focus-within:opacity-20 transition-opacity"></div>
              <div className="relative flex items-center bg-white border-2 border-black p-1 rounded-xl">
                <Search className="ml-4 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="COMMAND + K TO SEARCH..."
                  className="w-full bg-transparent py-4 px-4 text-[11px] font-bold tracking-widest focus:outline-none uppercase"
                />
                <div className="mr-2 px-3 py-1 bg-neutral-100 rounded flex gap-1 items-center">
                  <span className="text-[10px] font-bold text-neutral-400">
                    ⌘K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="w-full border-y-2 border-black bg-white overflow-hidden py-4 flex select-none">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex items-center gap-12 whitespace-nowrap animate-marquee px-6"
          >
            <span className="text-sm font-black uppercase tracking-tighter flex items-center gap-4">
              <Zap className="w-4 h-4 text-blue-600 fill-blue-600" /> New
              Content Weekly
            </span>
            <span className="text-sm font-black uppercase tracking-tighter flex items-center gap-4">
              <Globe className="w-4 h-4 text-blue-600" /> Global Community
            </span>
            <span className="text-sm font-black uppercase tracking-tighter flex items-center gap-4">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> Industry
              Certified
            </span>
          </div>
        ))}
      </div>

      {/* DISCOVER SECTION */}
      <main className="max-w-[1800px] mx-auto px-8 py-24">
        <div className="flex justify-between items-end mb-16 border-b-2 border-black pb-8">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">
            Featured Sessions /
          </h2>
          <button className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
            <Filter className="w-4 h-4" /> Filter Options
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {masterclasses.map((course) => (
            <div key={course.id} className="group relative">
              {/* Card Meta */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-neutral-400">
                  ID://{course.id}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black text-white rounded-sm">
                  {course.tag}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-neutral-100 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1">
                <img
                  src={course.poster}
                  alt={course.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <Play className="w-6 h-6 fill-black ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    {course.type}
                  </div>
                  <h3 className="text-3xl font-black leading-[0.9] uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-neutral-500 font-medium leading-relaxed border-l-2 border-neutral-100 pl-4">
                    {course.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-black/5">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                      Date & Time
                    </p>
                    <p className="text-xs font-black uppercase">
                      {course.dateTime}
                    </p>
                  </div>
                  <div className="space-y-1 border-l border-black/5 pl-4 text-right">
                    <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                      Entry Fee
                    </p>
                    <p className="text-xs font-black uppercase text-blue-600">
                      {course.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between group/footer">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white bg-neutral-200 overflow-hidden"
                        >
                          <img
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            alt="user"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {course.attendees} Enrolled
                    </span>
                  </div>
                  <button className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-black transition-all hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-black text-white py-24 px-8 mt-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <h2 className="text-[8vw] font-black leading-[0.8] tracking-tighter uppercase italic">
              STAY <br /> CURIOUS.
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-neutral-400 max-w-md">
                Subscribe to get notified about secret workshops and early bird
                drops.
              </p>
              <div className="flex border-b border-neutral-700 py-4">
                <input
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  className="bg-transparent w-full text-sm font-bold tracking-widest outline-none"
                />
                <button className="text-blue-500 font-black uppercase tracking-tighter text-sm italic">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div className="mt-40 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500">
            <p>© 2025 ALL RIGHTS RESERVED / MSTR CLSS LTD</p>
            <p>PRIVACY / TERMS / COOKIES</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MasterclassLanding;
