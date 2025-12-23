import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "./data";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Globe,
  ShieldCheck,
  ArrowLeft,
  Share2,
  Users,
  Video,
  Ticket,
  BookOpen,
  ListOrdered,
  Target,
  Info,
  ChevronRight,
  Star,
} from "lucide-react";

const MasterclassDetails = () => {
  const { masterclassPath } = useParams();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Find the event based on URL path
  const event = events.find((e) => e.path === masterclassPath) || events[0];

  const handleRegister = () => {
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      setShowSuccess(true);
      const registered = JSON.parse(localStorage.getItem("myEvents") || "[]");
      if (!registered.find((item) => item.id === event.id)) {
        localStorage.setItem(
          "myEvents",
          JSON.stringify([...registered, event])
        );
      }
      setTimeout(() => navigate("/mymasterclass"), 2000);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center font-['Poppins']">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle2 size={48} className="text-blue-600" />
        </div>
        <h2 className="text-4xl font-[900] mb-2">You're in!</h2>
        <p className="text-gray-500 text-lg">Seat reserved for {event.name}.</p>
        <p className="text-sm text-blue-600 font-bold mt-8 animate-pulse">
          Redirecting to your dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFB] font-['Poppins']">
      {/* Premium Nav */}
      <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-black transition-all font-bold text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Catalog
          </button>
          <img src="/curvuplogo.png" alt="Curvup" className="h-6" />
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-gray-50 rounded-full text-gray-400 hover:text-blue-600 cursor-pointer transition-colors">
              <Share2 size={18} />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Image & Headline */}
            <div className="relative rounded-[48px] overflow-hidden aspect-[21/9] shadow-2xl group">
              <img
                src={event.poster}
                alt={event.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    Masterclass
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    {event.type}
                  </span>
                </div>
                <h1 className="text-white text-4xl md:text-6xl font-[900] leading-[1] tracking-tight">
                  {event.name}
                </h1>
              </div>
            </div>

            {/* Detailed Overview */}
            <section className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-[900] mb-6 flex items-center gap-3">
                <Star className="text-blue-600 fill-blue-600" size={24} />{" "}
                Detailed Overview
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                {event.detailedOverview}
              </p>
            </section>

            {/* Curriculum / Topics */}
            <section>
              <h3 className="text-2xl font-[900] mb-8 flex items-center gap-3 uppercase tracking-tighter">
                <BookOpen className="text-blue-600" size={24} /> Curriculum
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {event.topics.map((topic, i) => (
                  <div
                    key={i}
                    className="group bg-white p-8 rounded-[32px] border border-gray-100 hover:border-blue-200 transition-all shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                          0{i + 1}
                        </span>
                        <h4 className="text-xl font-black text-gray-900">
                          {topic.title}
                        </h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-14">
                      {topic.subTopics.map((sub, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 text-sm text-gray-400 font-bold"
                        >
                          <ChevronRight size={14} className="text-blue-600" />{" "}
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Agenda Timeline */}
            <section className="bg-black rounded-[48px] p-12 text-white">
              <h3 className="text-2xl font-[900] mb-10 flex items-center gap-3">
                <ListOrdered className="text-blue-400" size={24} /> Session
                Agenda
              </h3>
              <div className="space-y-0 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                {event.agenda.map((item, i) => (
                  <div key={i} className="relative pl-10 pb-10 last:pb-0">
                    <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-blue-600 border-4 border-black z-10"></div>
                    <div className="flex justify-between items-center">
                      <span className="font-black text-lg">{item.title}</span>
                      <span className="text-blue-400 font-black text-xs uppercase tracking-widest bg-blue-400/10 px-3 py-1 rounded-lg">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR (STICKY) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Registration Card */}
              <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-xl shadow-blue-900/5">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">
                      Tuition Fee
                    </p>
                    <h4 className="text-4xl font-[900] text-gray-900">
                      {event.pricing}
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-50 group hover:border-blue-100 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-blue-600">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                        Live On
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {event.dateTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-50 group hover:border-blue-100 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-blue-600">
                      <Video size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                        Format
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {event.type} Interactive
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleRegister}
                  disabled={isRegistering}
                  className="w-full bg-blue-600 text-white font-[900] py-5 rounded-3xl hover:bg-black transition-all duration-300 shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:bg-gray-400 uppercase text-xs tracking-widest"
                >
                  {isRegistering ? "Confirming..." : "Reserve Your Seat"}
                  {!isRegistering && <Ticket size={18} />}
                </button>

                <p className="text-center text-[10px] font-bold text-gray-400 mt-6">
                  Limited to {event.attendees}+ participants
                </p>
              </div>

              {/* Target Audience Card */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Target size={14} className="text-blue-600" /> Perfect Match
                  For
                </h5>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-black mb-3">
                      Professional Level
                    </p>
                    <span className="bg-gray-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase">
                      {event.targetAudience.stage}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-black mb-3">Sectors</p>
                    <div className="flex flex-wrap gap-2">
                      {event.targetAudience.industry.map((ind, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black border border-blue-100"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Prerequisites Card */}
              <div className="bg-blue-600 rounded-[32px] p-8 text-white shadow-xl shadow-blue-100 relative overflow-hidden">
                <Info className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
                <h5 className="text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  Prerequisites
                </h5>
                <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                  "{event.prerequisites}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MasterclassDetails;
