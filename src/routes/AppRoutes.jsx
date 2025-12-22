// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import LP from "../pages/Lp";
import EventDetails from "../pages/EventDetails";
import MyEvents from "../pages/MyEvents";
import AdminDashboard from "../pages/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LP />} />
      {/* Dynamic route for events */}
      <Route path="/:eventPath" element={<EventDetails />} />
      {/* Route for registered events */}
      <Route path="/myevents" element={<MyEvents />} />

      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
