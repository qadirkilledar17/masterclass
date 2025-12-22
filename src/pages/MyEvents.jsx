import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  PlayCircle,
  ArrowRight,
  Zap,
  Bell,
  User,
} from "lucide-react";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myEvents") || "[]");
    setMyEvents(saved);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#FAFAFB]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 h-20 flex items-center sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <img
            src="/curvuplogo.png"
            alt="Curvup"
            className="h-7 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex items-center gap-6">
            <Bell size={20} className="text-gray-400" />
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              QK
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-2">
              My Workshops
            </h2>
            <p className="text-gray-500 font-medium">
              Your upcoming schedule and resources.
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
          >
            Explore More <ArrowRight size={18} />
          </button>
        </div>

        {myEvents.length === 0 ? (
          <div className="bg-white rounded-[40px] p-20 border border-dashed border-gray-200 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={32} className="text-gray-300" />
            </div>
            <h3 className="text-2xl font-black mb-4">No events yet</h3>
            <p className="text-gray-400 max-w-xs mx-auto mb-8">
              You haven't registered for any masterclasses yet. Start your
              journey today.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-black transition-all"
            >
              Browse Workshops
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-video">
                  <img
                    src={event.poster}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-xl shadow-lg">
                    <PlayCircle size={20} />
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">
                    <Calendar size={12} /> {event.dateTime}
                  </div>
                  <h3 className="text-xl font-bold mb-6 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {event.name}
                  </h3>

                  <button className="w-full bg-blue-600 text-white py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-black transition-all shadow-lg shadow-blue-100">
                    Launch Workshop
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MyEvents;
