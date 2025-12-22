import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Globe,
  Lock,
  Video,
  MapPin,
  DollarSign,
  Calendar,
  Clock,
  X,
  Check,
  ChevronLeft,
  Mail,
  Zap,
  Eye,
  Layout,
  ListOrdered,
  Users,
  BookOpen,
  Trash2,
  GripVertical,
} from "lucide-react";

const AdminPortal = () => {
  const navigate = useNavigate();

  // State matching your specific data schema
  const [formData, setFormData] = useState({
    name: "",
    path: "",
    type: "Online",
    privacy: "Public",
    host: "Qadir Killedar",
    dateTime: "",
    pricing: "Free",
    poster: null,
    shortDescription: "",
    detailedOverview: "",
    topics: [{ title: "", subTopics: [""] }],
    agenda: [{ title: "", duration: "" }],
    targetAudience: { stage: "", industry: [] },
    prerequisites: "",
  });

  // --- Logic Helpers ---
  const addTopic = () =>
    setFormData({
      ...formData,
      topics: [...formData.topics, { title: "", subTopics: [""] }],
    });

  const addSubTopic = (topicIndex) => {
    const newTopics = [...formData.topics];
    newTopics[topicIndex].subTopics.push("");
    setFormData({ ...formData, topics: newTopics });
  };

  const addAgendaItem = () =>
    setFormData({
      ...formData,
      agenda: [...formData.agenda, { title: "", duration: "" }],
    });

  const updateIndustry = (industry) => {
    const current = formData.targetAudience.industry;
    const updated = current.includes(industry)
      ? current.filter((i) => i !== industry)
      : [...current, industry];
    setFormData({
      ...formData,
      targetAudience: { ...formData.targetAudience, industry: updated },
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F7F9] flex flex-col font-['Poppins']">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 h-20 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-xl transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <img src="/curvuplogo.png" alt="Curvup" className="h-6" />
          <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
          <h2 className="font-black text-sm uppercase tracking-tighter">
            Event Studio
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-black">
            Discard
          </button>
          <button className="px-8 py-2.5 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-200 hover:bg-black transition-all">
            Publish Masterclass
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Nav */}
        <aside className="w-64 bg-white border-r border-gray-100 p-6 hidden xl:block">
          <nav className="space-y-2">
            {[
              { id: "basic", label: "Basic Info", icon: <Layout size={18} /> },
              {
                id: "content",
                label: "Curriculum",
                icon: <BookOpen size={18} />,
              },
              {
                id: "agenda",
                label: "Agenda",
                icon: <ListOrdered size={18} />,
              },
              {
                id: "audience",
                label: "Target Audience",
                icon: <Users size={18} />,
              },
            ].map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-400 hover:bg-gray-50 hover:text-blue-600 transition-all"
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Form Content */}
        <main className="flex-1 overflow-y-auto p-10 space-y-10 pb-32">
          {/* Section 1: Visual & Core */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <div className="mb-8">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3 block">
                  Masterclass Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Distributed Systems at Scale"
                  className="text-3xl font-black w-full outline-none placeholder:text-gray-100 focus:placeholder:text-gray-200"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">
                    Short Description
                  </label>
                  <input
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 font-medium text-gray-600 focus:ring-2 focus:ring-blue-100 outline-none"
                    placeholder="One liner for the card preview..."
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        shortDescription: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">
                    Detailed Overview
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-50 border-none rounded-2xl p-4 font-medium text-gray-600 focus:ring-2 focus:ring-blue-100 outline-none"
                    placeholder="Explain the deep technical value..."
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        detailedOverview: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Live Preview Side */}
            <div className="lg:col-span-5 bg-black rounded-[40px] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={150} />
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-2">
                <Eye size={14} /> Live Card Preview
              </h4>
              <div className="bg-white rounded-[32px] p-2 shadow-2xl scale-95 origin-top">
                <div className="aspect-video bg-gray-100 rounded-[28px] overflow-hidden">
                  {formData.poster ? (
                    <img
                      src={formData.poster}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-300 font-bold">
                      Upload Poster
                    </div>
                  )}
                </div>
                <div className="p-6 text-black">
                  <div className="text-[10px] font-black text-blue-600 uppercase mb-2">
                    {formData.pricing}
                  </div>
                  <h3 className="font-black text-lg truncate">
                    {formData.name || "Untitled Masterclass"}
                  </h3>
                </div>
              </div>
              <div className="mt-8">
                <input
                  type="file"
                  id="poster"
                  className="hidden"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      poster: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
                <label
                  htmlFor="poster"
                  className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl flex items-center justify-center gap-3 cursor-pointer font-bold transition-all"
                >
                  Update Media Asset
                </label>
              </div>
            </div>
          </section>

          {/* Section 2: Curriculum Builder (Topics & Subtopics) */}
          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-black flex items-center gap-3">
                <BookOpen className="text-blue-600" /> Curriculum Builder
              </h3>
              <button
                onClick={addTopic}
                className="px-5 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Plus size={14} /> Add Major Topic
              </button>
            </div>

            <div className="space-y-8">
              {formData.topics.map((topic, tIdx) => (
                <div
                  key={tIdx}
                  className="p-6 bg-gray-50 rounded-[32px] border border-gray-100 relative group"
                >
                  <button className="absolute -top-3 -right-3 p-2 bg-white text-red-500 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 size={16} />
                  </button>
                  <input
                    placeholder="Topic Title (e.g. Distributed Systems Fundamentals)"
                    className="bg-transparent text-lg font-black w-full outline-none mb-4 border-b border-gray-200 pb-2 focus:border-blue-600 transition-all"
                  />
                  <div className="space-y-3">
                    {topic.subTopics.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <input
                          placeholder="Subtopic detail..."
                          className="bg-transparent text-sm font-bold text-gray-500 w-full outline-none"
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => addSubTopic(tIdx)}
                      className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-2 hover:underline"
                    >
                      + Add Sub-detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Agenda & Timeline */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                <ListOrdered className="text-blue-600" /> Session Agenda
              </h3>
              <div className="space-y-4">
                {formData.agenda.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <input
                      placeholder="Action (e.g. Live Q&A)"
                      className="flex-1 bg-gray-50 p-4 rounded-2xl text-sm font-bold outline-none"
                    />
                    <input
                      placeholder="Duration"
                      className="w-24 bg-gray-50 p-4 rounded-2xl text-sm font-bold text-blue-600 outline-none"
                    />
                  </div>
                ))}
                <button
                  onClick={addAgendaItem}
                  className="w-full py-4 border-2 border-dashed border-gray-100 rounded-2xl text-gray-400 font-bold text-xs hover:border-blue-200 hover:text-blue-600 transition-all"
                >
                  + Add Agenda Slot
                </button>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                <Users className="text-blue-600" /> Target Audience
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">
                    Seniority Level
                  </label>
                  <select className="w-full bg-gray-50 p-4 rounded-2xl font-bold outline-none border-none">
                    <option>Junior to Mid</option>
                    <option>Mid to Senior level</option>
                    <option>C-Suite / Architects</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">
                    Industries
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Engineering",
                      "Platform Engineering",
                      "Cloud",
                      "Product Design",
                      "Web3",
                    ].map((ind) => (
                      <button
                        key={ind}
                        onClick={() => updateIndustry(ind)}
                        className={`px-4 py-2 rounded-full text-[10px] font-black border transition-all ${
                          formData.targetAudience.industry.includes(ind)
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-white border-gray-100 text-gray-400"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">
                    Prerequisites
                  </label>
                  <input
                    className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-sm outline-none"
                    placeholder="e.g. Basic understanding of cloud infrastructure"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminPortal;
