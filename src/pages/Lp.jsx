import { useNavigate } from "react-router-dom";

const LP = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="text-center space-y-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Learn. Attend. Level Up.
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Explore upcoming events or deep-dive into curated masterclasses built
          by industry experts.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={() => navigate("/events")}
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Go to Events
          </button>

          <button
            onClick={() => navigate("/masterclass")}
            className="px-8 py-4 rounded-xl border border-white/30 hover:bg-white hover:text-black transition font-semibold"
          >
            Go to Masterclass
          </button>
        </div>
      </div>
    </div>
  );
};

export default LP;
