import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Trash2,
  MapPin,
  Globe,
  Lock,
  ExternalLink,
  MoreHorizontal,
  Clock,
  User,
  Download,
} from "lucide-react";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myEvents") || "[]");
    setMyEvents(saved);
  }, []);

  const removeEvent = (id) => {
    const updated = myEvents.filter((e) => e.id !== id);
    setMyEvents(updated);
    localStorage.setItem("myEvents", JSON.stringify(updated));
  };

  // --- CALENDAR EXPORT LOGIC ---
  const downloadIcs = (event) => {
    // Basic date parsing logic for "Dec 28, 2025 • 10:00 AM"
    const datePart = event.dateTime.split("•")[0].trim();
    const timePart = event.dateTime.split("•")[1].trim();
    const dateObj = new Date(`${datePart} ${timePart}`);

    // Format: YYYYMMDDTHHMMSSZ
    const formatDate = (date) => date.toISOString().replace(/-|:|\.\d+/g, "");
    const startDate = formatDate(dateObj);
    const endDate = formatDate(
      new Date(dateObj.getTime() + 2 * 60 * 60 * 1000)
    ); // Default 2 hours

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Curvp//Event Planner//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${event.name}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.locationType}`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${event.name.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-black pb-32">
      {/* --- TOP NAVIGATION --- */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <button
            onClick={() => navigate("/events")}
            className="flex items-center gap-2 text-[11px] font-600 uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Return to Catalog
          </button>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-600 uppercase tracking-widest text-gray-300">
              Registered Events
            </span>
            <div className="h-8 w-8 rounded-full border border-gray-100 flex items-center justify-center">
              <span className="text-[10px] font-600">{myEvents.length}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 pt-32">
        {/* --- HEADER --- */}
        <div className="mb-20">
          <span className="text-[10px] font-600 uppercase tracking-[0.4em] text-gray-400">
            Personal Vault
          </span>
          <h1 className="mt-4 text-5xl font-600 tracking-tighter md:text-7xl">
            YOUR <span className="text-[#0251FD]">TICKETS.</span>
          </h1>
          <div className="mt-8 h-px w-20 bg-black" />
        </div>

        {/* --- TICKETS LIST --- */}
        {myEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 rounded-[3rem] border border-dashed border-gray-100">
            <p className="text-[11px] font-600 uppercase tracking-widest text-gray-300">
              Your vault is empty
            </p>
            <button
              onClick={() => navigate("/events")}
              className="mt-6 text-xs font-600 text-[#0251FD] hover:underline uppercase tracking-widest"
            >
              Explore Experiences
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {myEvents.map((event) => (
              <div
                key={event.id}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white transition-all hover:border-gray-200 md:flex-row"
              >
                {/* Visual Section */}
                <div className="relative h-56 w-full overflow-hidden md:h-auto md:w-80">
                  <img
                    src={event.poster}
                    alt={event.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>

                {/* Content Section */}
                <div className="flex flex-grow flex-col p-8 md:p-12">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1.5 text-[10px] font-600 uppercase tracking-widest text-gray-400">
                        {event.locationType === "Online" ? (
                          <Globe className="h-3.5 w-3.5" />
                        ) : (
                          <MapPin className="h-3.5 w-3.5" />
                        )}
                        {event.locationType}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-600 uppercase tracking-widest text-gray-400">
                        {event.visibility === "Private" ? (
                          <Lock className="h-3.5 w-3.5" />
                        ) : (
                          <Globe className="h-3.5 w-3.5" />
                        )}
                        {event.visibility}
                      </span>
                    </div>
                    <button
                      onClick={() => removeEvent(event.id)}
                      className="text-gray-200 hover:text-black transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <h3 className="mb-6 text-3xl font-600 tracking-tight leading-none">
                    {event.name}
                  </h3>

                  <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3 text-sm font-500 text-gray-600">
                      <Calendar className="h-4 w-4 text-gray-300" />
                      {event.dateTime.split("•")[0]}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-500 text-gray-600">
                      <Clock className="h-4 w-4 text-gray-300" />
                      {event.dateTime.split("•")[1]}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap gap-4 pt-8 border-t border-gray-50">
                    <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#0251FD] py-5 text-[11px] font-600 uppercase tracking-[0.2em] text-white transition-all hover:opacity-90 active:scale-[0.98] sm:flex-none sm:px-10">
                      Join Event <ExternalLink className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => downloadIcs(event)}
                      className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-gray-100 py-5 text-[11px] font-600 uppercase tracking-[0.2em] text-gray-500 transition-all hover:bg-gray-50 hover:text-black sm:flex-none sm:px-10"
                    >
                      Add to Calendar <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Vertical Ticket Line Ornament */}
                <div className="absolute right-0 top-0 bottom-0 hidden w-px bg-gray-50 md:left-80 md:block" />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MyEvents;
