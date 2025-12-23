import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  Share2,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Zap,
  Check,
} from "lucide-react";
import { eventsData } from "./eventsdata";

const EventDetails = () => {
  const { eventName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const event =
    location.state?.event ||
    eventsData.find(
      (e) => e.name.toLowerCase().replace(/ /g, "-") === eventName
    );

  if (!event)
    return <div className="p-20 text-center font-medium">Event not found</div>;

  const handleRegister = () => {
    const savedEvents = JSON.parse(localStorage.getItem("myEvents") || "[]");
    if (!savedEvents.find((e) => e.id === event.id)) {
      savedEvents.push(event);
      localStorage.setItem("myEvents", JSON.stringify(savedEvents));
    }
    navigate("/myevents");
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-black pb-32">
      {/* --- TOP NAV --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[11px] font-600 uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Catalog
          </button>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-[11px] font-600 uppercase tracking-[0.2em] border border-gray-100 px-4 py-2 rounded-full hover:bg-gray-50 transition-all">
              <Share2 className="h-3.5 w-3.5" /> Share
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 pt-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="lg:col-span-8">
            {/* Category & Title */}
            <div className="mb-8">
              <span className="text-[10px] font-600 uppercase tracking-[0.3em] text-gray-400">
                {event.category} / {event.locationType}
              </span>
              <h1 className="mt-4 text-5xl font-600 leading-[1.1] tracking-tight md:text-7xl">
                {event.name}
              </h1>
            </div>

            {/* Main Imagery */}
            <div className="relative mb-16 aspect-[21/9] overflow-hidden rounded-[2rem] border border-gray-100">
              <img
                src={event.poster}
                alt={event.name}
                className="h-full w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Quick Info Grid */}
            <div className="mb-16 grid grid-cols-2 gap-8 border-y border-gray-100 py-10 md:grid-cols-4">
              {[
                {
                  label: "Date",
                  val: event.dateTime.split("•")[0],
                  icon: Calendar,
                },
                {
                  label: "Time",
                  val: event.dateTime.split("•")[1],
                  icon: Clock,
                },
                { label: "Attendees", val: `${event.attendees}+`, icon: Users },
                { label: "Access", val: event.visibility, icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i}>
                  <item.icon className="mb-3 h-5 w-5 text-gray-300" />
                  <p className="text-[10px] font-600 uppercase tracking-widest text-gray-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-500">{item.val}</p>
                </div>
              ))}
            </div>

            {/* About Section */}
            <section className="mb-20">
              <h3 className="mb-6 text-[11px] font-600 uppercase tracking-[0.3em] text-gray-400">
                Project Brief
              </h3>
              <p className="max-w-2xl text-xl font-400 leading-relaxed text-gray-600">
                {event.description} This experience is designed to push the
                boundaries of {event.category.toLowerCase()}. Participants will
                engage in high-level discussions, networking, and hands-on
                sessions.
              </p>
            </section>

            {/* Schedule Section (NEW DATA) */}
            <section className="mb-20">
              <h3 className="mb-8 text-[11px] font-600 uppercase tracking-[0.3em] text-gray-400">
                Event Schedule
              </h3>
              <div className="space-y-6">
                {[
                  { time: "10:00 AM", task: "Opening Keynote & Vision" },
                  { time: "11:30 AM", task: "Interactive Workshop Session" },
                  { time: "01:00 PM", task: "Networking Lunch" },
                  { time: "02:30 PM", task: "Expert Panel Discussion" },
                ].map((slot, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-8 border-b border-gray-50 pb-6"
                  >
                    <span className="w-20 text-sm font-600 text-gray-400">
                      {slot.time}
                    </span>
                    <span className="text-lg font-500">{slot.task}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights (NEW DATA) */}
            <section className="mb-20">
              <h3 className="mb-8 text-[11px] font-600 uppercase tracking-[0.3em] text-gray-400">
                What to Expect
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  "Premium curated networking environment",
                  "Direct access to industry leaders",
                  "Comprehensive resource toolkit provided",
                  "Lifetime access to event recordings",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 p-6"
                  >
                    <Check className="mt-1 h-4 w-4 text-black" />
                    <p className="text-sm font-400 text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN: STICKY BOOKING --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-600 uppercase tracking-widest text-gray-400">
                    Standard Pass
                  </p>
                  <p className="mt-1 text-4xl font-600 leading-none">
                    {event.price}
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center">
                  <Zap className="h-4 w-4" />
                </div>
              </div>

              <div className="mb-10 space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-50">
                  <span className="text-xs font-500 text-gray-400">Host</span>
                  <span className="text-xs font-600">{event.host}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-50">
                  <span className="text-xs font-500 text-gray-400">
                    Location
                  </span>
                  <span className="text-xs font-600">{event.locationType}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-xs font-500 text-gray-400">
                    Availability
                  </span>
                  <span className="text-xs font-600">Limited Spots</span>
                </div>
              </div>

              <button
                onClick={handleRegister}
                className="group w-full rounded-2xl bg-[#0251FD] py-5 text-[11px] font-600 uppercase tracking-[0.3em] text-white transition-all hover:bg-[#0246d9] active:scale-[0.98]"
              >
                Register Entry
              </button>

              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-white bg-gray-100 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="user"
                      />
                    </div>
                  ))}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-50 text-[8px] font-600">
                    +12
                  </div>
                </div>
                <p className="text-[10px] font-500 text-gray-400 text-center uppercase tracking-widest">
                  Joined by curated professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
