import React, { useState, useCallback } from "react";
import {
  ArrowLeft,
  Upload,
  X,
  Plus,
  Clock,
  Trash2,
  MapPin,
  Link as LinkIcon,
  DollarSign,
  CheckCircle2,
  Calendar as CalendarIcon,
  Save,
  Loader2,
} from "lucide-react";

// Predefined Categories
const CATEGORIES = [
  "Development & Tech",
  "Design & Creative",
  "Business & Startup",
  "Marketing & Growth",
  "Music & Audio",
  "Visual Arts",
  "Health & Wellness",
  "Other",
];

const CreateEvent = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);

  // --- COMPLEX FORM STATE ---
  const [formData, setFormData] = useState({
    title: "",
    hostName: "Curvup Official HQ", // Default host
    category: CATEGORIES[0],
    description: "",
    startDate: "",
    startTime: "10:00",
    endDate: "",
    endTime: "11:00",
    locationType: "Online", // Online, In-Person, Hybrid
    address: "",
    meetingLink: "",
    visibility: "Public", // Public, Private
    ticketType: "Free", // Free, Paid
    currency: "USD",
    price: "",
  });

  // Dynamic Lists States
  const [expectations, setExpectations] = useState([""]);
  const [schedule, setSchedule] = useState([{ time: "", title: "" }]);

  // --- HANDLERS ---

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Drag & Drop Media
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFile = (file) => {
    // In production, check file type/size here
    setPreview(URL.createObjectURL(file));
  };

  // Dynamic "What to Expect" Handlers
  const handleExpectationChange = (index, value) => {
    const newExpectations = [...expectations];
    newExpectations[index] = value;
    setExpectations(newExpectations);
  };
  const addExpectationField = () => setExpectations([...expectations, ""]);
  const removeExpectationField = (index) => {
    const newExpectations = expectations.filter((_, i) => i !== index);
    setExpectations(newExpectations);
  };

  // Dynamic Schedule Handlers
  const handleScheduleChange = (index, field, value) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };
  const addScheduleSlot = () =>
    setSchedule([...schedule, { time: "", title: "" }]);
  const removeScheduleSlot = (index) => {
    const newSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(newSchedule);
  };

  const handleSubmit = () => {
    console.log("Full Event Payload:", {
      ...formData,
      expectations,
      schedule,
      preview,
    });
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onBack();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-black antialiased">
      {/* --- TOP CONTROL BAR --- */}
      <nav className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-gray-100 bg-white/90 backdrop-blur-xl px-8">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Exit Studio
        </button>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />{" "}
            Draft Auto-Saved
          </span>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 rounded-full bg-[#0251FD] px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Publish Event
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-8 pt-20 pb-40">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-6xl font-bold tracking-tighter">
            New <span className="text-[#0251FD]">Experience.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-xl leading-relaxed">
            Craft the details of your next event. Define the vision, logistics,
            and ticketing structure below.
          </p>
        </div>

        <div className="space-y-32">
          {/* ================= SECTION 1: THE BASICS ================= */}
          <section>
            <SectionHeader number="01" title="Vision & Identity" />

            <div className="space-y-12">
              {/* Title Input */}
              <div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Give your event a striking title..."
                  className="w-full border-b-2 border-gray-100 bg-transparent py-4 text-3xl font-bold outline-none transition-colors placeholder:text-gray-300 focus:border-[#0251FD]"
                />
              </div>

              {/* Host & Category Grid */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-2xl bg-gray-50/50 p-6 transition-all hover:bg-gray-50">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Primary Host
                  </label>
                  <input
                    type="text"
                    name="hostName"
                    value={formData.hostName}
                    onChange={handleInputChange}
                    className="mt-2 w-full bg-transparent text-sm font-semibold outline-none placeholder:text-gray-400"
                  />
                </div>
                <div className="rounded-2xl bg-gray-50/50 p-6 transition-all hover:bg-gray-50">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Category Classification
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="mt-2 w-full cursor-pointer bg-transparent text-sm font-semibold outline-none"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="mb-4 block text-[11px] font-bold uppercase tracking-widest text-black">
                  About the Event
                </label>
                <textarea
                  name="description"
                  rows="5"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Write a compelling summary of what this event is about..."
                  className="w-full resize-none rounded-3xl border border-gray-100 bg-white p-6 text-sm leading-relaxed outline-none transition-all placeholder:text-gray-300 focus:border-[#0251FD] focus:ring-4 focus:ring-blue-50/50"
                />
              </div>

              {/* What to Expect (Dynamic List) */}
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-black">
                    What to Expect (Highlights)
                  </label>
                  <button
                    onClick={addExpectationField}
                    className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#0251FD] hover:underline"
                  >
                    <Plus className="h-3 w-3" /> Add Point
                  </button>
                </div>
                <div className="space-y-3">
                  {expectations.map((point, index) => (
                    <div key={index} className="group flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0251FD] shrink-0" />
                      <input
                        type="text"
                        value={point}
                        onChange={(e) =>
                          handleExpectationChange(index, e.target.value)
                        }
                        placeholder={`Highlight point ${index + 1}`}
                        className="flex-grow border-b border-gray-100 py-2 text-sm outline-none focus:border-[#0251FD] placeholder:text-gray-300"
                      />
                      {expectations.length > 1 && (
                        <button
                          onClick={() => removeExpectationField(index)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-300 hover:text-red-500"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ================= SECTION 2: VISUALS ================= */}
          <section>
            <SectionHeader number="02" title="Cover Media" />

            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`group relative flex aspect-[21/9] w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[3rem] border-2 border-dashed transition-all duration-300 ${
                dragActive
                  ? "border-[#0251FD] bg-blue-50/50 scale-[1.02]"
                  : "border-gray-200 bg-gray-50/30 hover:border-[#0251FD]/30 hover:bg-gray-50"
              }`}
            >
              <input
                type="file"
                className="absolute inset-0 z-10 cursor-pointer opacity-0"
                onChange={(e) =>
                  e.target.files[0] && handleFile(e.target.files[0])
                }
                accept="image/png, image/jpeg, image/jpg"
              />

              {preview ? (
                <div className="absolute inset-0 h-full w-full bg-black">
                  <img
                    src={preview}
                    className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-60"
                    alt="Preview"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="rounded-full bg-white/20 backdrop-blur-md px-6 py-3 text-xs font-bold text-white uppercase tracking-widest">
                      Click to Change
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreview(null);
                    }}
                    className="absolute right-6 top-6 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg transition-transform hover:scale-110 active:scale-95"
                  >
                    <X className="h-5 w-5 text-black" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center p-12">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl shadow-gray-200/50 transition-transform group-hover:scale-110 group-hover:text-[#0251FD]">
                    <Upload className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold">
                    Drag and drop your poster
                  </h4>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                    or click to browse (Max 5MB)
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* ================= SECTION 3: LOGISTICS ================= */}
          <section>
            <SectionHeader number="03" title="When & Where" />

            <div className="grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2">
              {/* Dates & Times */}
              <div className="col-span-full grid grid-cols-2 gap-8 md:grid-cols-4 rounded-3xl border border-gray-100 p-8">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <CalendarIcon className="h-3 w-3" /> Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-gray-50 p-3 text-sm font-semibold outline-none focus:bg-white focus:ring-2 focus:ring-[#0251FD]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <Clock className="h-3 w-3" /> Start Time
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-gray-50 p-3 text-sm font-semibold outline-none focus:bg-white focus:ring-2 focus:ring-[#0251FD]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <CalendarIcon className="h-3 w-3" /> End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-gray-50 p-3 text-sm font-semibold outline-none focus:bg-white focus:ring-2 focus:ring-[#0251FD]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <Clock className="h-3 w-3" /> End Time
                  </label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-gray-50 p-3 text-sm font-semibold outline-none focus:bg-white focus:ring-2 focus:ring-[#0251FD]"
                  />
                </div>
              </div>

              {/* Location Type Selector */}
              <div className="col-span-full space-y-4">
                <label className="text-[11px] font-bold uppercase tracking-widest text-black">
                  Location Setting
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Online", "In-Person", "Hybrid"].map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, locationType: type }))
                      }
                      className={`rounded-full px-8 py-3 text-sm font-bold transition-all ${
                        formData.locationType === type
                          ? "bg-black text-white shadow-lg"
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Address Input */}
              {(formData.locationType === "In-Person" ||
                formData.locationType === "Hybrid") && (
                <div className="col-span-full md:col-span-1 animate-fadeIn relative">
                  <MapPin className="absolute top-4 left-4 h-5 w-5 text-gray-400" />
                  <textarea
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter full physical address & venue details..."
                    className="w-full resize-none rounded-2xl border border-gray-100 bg-gray-50/50 py-4 pl-12 pr-4 text-sm font-medium outline-none transition-all focus:border-[#0251FD] focus:bg-white"
                  />
                </div>
              )}

              {/* Conditional Link Input */}
              {(formData.locationType === "Online" ||
                formData.locationType === "Hybrid") && (
                <div className="col-span-full md:col-span-1 animate-fadeIn relative">
                  <LinkIcon className="absolute top-1/2 -translate-y-1/2 left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    name="meetingLink"
                    value={formData.meetingLink}
                    onChange={handleInputChange}
                    placeholder="https://zoom.us/j/..."
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50/50 py-4 pl-12 pr-4 text-sm font-medium outline-none transition-all focus:border-[#0251FD] focus:bg-white"
                  />
                </div>
              )}
            </div>
          </section>

          {/* ================= SECTION 4: AGENDA ================= */}
          <section>
            <SectionHeader number="04" title="Event Programming" />

            <div className="rounded-[2.5rem] border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between border-b border-gray-50 bg-gray-50/30 px-8 py-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Timeline & Sessions
                </p>
                <button
                  onClick={addScheduleSlot}
                  className="flex items-center gap-2 rounded-full bg-white border border-gray-100 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#0251FD] shadow-sm hover:shadow transition-all active:scale-95"
                >
                  <Plus className="h-3 w-3" /> Add Slot
                </button>
              </div>

              <div className="divide-y divide-gray-50">
                {schedule.map((item, i) => (
                  <div
                    key={i}
                    className="group flex flex-col md:flex-row items-start md:items-center gap-4 px-8 py-6 transition-colors hover:bg-blue-50/10"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-300 shrink-0" />
                      <input
                        type="text"
                        value={item.time}
                        onChange={(e) =>
                          handleScheduleChange(i, "time", e.target.value)
                        }
                        className="w-24 bg-transparent py-2 text-sm font-bold outline-none focus:text-[#0251FD] placeholder:text-gray-300 placeholder:font-medium"
                        placeholder="00:00 AM"
                      />
                    </div>

                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        handleScheduleChange(i, "title", e.target.value)
                      }
                      className="flex-grow bg-transparent py-2 text-sm font-medium outline-none focus:text-[#0251FD] placeholder:text-gray-300"
                      placeholder="Session Title / Activity Name"
                    />
                    {schedule.length > 1 && (
                      <button
                        onClick={() => removeScheduleSlot(i)}
                        className="p-2 text-gray-300 opacity-50 md:opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= SECTION 5: TICKETING ================= */}
          <section>
            <SectionHeader number="05" title="Access & Ticketing" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Visibility Toggle */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold uppercase tracking-widest text-black">
                  Discoverability
                </label>
                <div className="flex p-1 bg-gray-50 rounded-full w-fit">
                  {["Public", "Private"].map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, visibility: type }))
                      }
                      className={`rounded-full px-8 py-3 text-sm font-bold transition-all ${
                        formData.visibility === type
                          ? "bg-white text-black shadow-md"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Admission Toggle */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold uppercase tracking-widest text-black">
                  Admission Type
                </label>
                <div className="flex p-1 bg-gray-50 rounded-full w-fit">
                  {["Free", "Paid"].map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, ticketType: type }))
                      }
                      className={`rounded-full px-8 py-3 text-sm font-bold transition-all ${
                        formData.ticketType === type
                          ? "bg-white text-black shadow-md"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Price Inputs */}
              {formData.ticketType === "Paid" && (
                <div className="col-span-full md:col-span-1 animate-fadeIn">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-black mb-4 block">
                    Ticket Price Details
                  </label>
                  <div className="flex gap-4">
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="rounded-2xl bg-gray-50 px-6 py-4 text-sm font-bold outline-none"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="INR">INR (₹)</option>
                    </select>
                    <div className="relative flex-grow">
                      <DollarSign className="absolute top-1/2 -translate-y-1/2 left-4 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        className="w-full rounded-2xl border border-gray-100 bg-white py-4 pl-12 pr-4 text-xl font-bold outline-none transition-all focus:border-[#0251FD] focus:ring-4 focus:ring-blue-50/50"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// Helper Component for Section Headers
const SectionHeader = ({ number, title }) => (
  <div className="mb-12 flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
      {number}
    </div>
    <h3 className="text-2xl font-bold tracking-tight text-black">{title}</h3>
    <div className="h-[1px] flex-grow bg-gray-100 ml-4"></div>
  </div>
);

export default CreateEvent;
