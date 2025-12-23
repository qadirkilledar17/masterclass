// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import LP from "../pages/Lp";
import MasterclassLanding from "../pages/masterclass/MasterclassLanding";
import MasterclassDetails from "../pages/masterclass/MasterclassDetails";
import MyMasterclass from "../pages/masterclass/MyMasterclass";
import AdminDashboard from "../pages/masterclass/AdminDashboard";

import EventsLandingpage from "../pages/events/EventsLandingpage";
import MyEvents from "../pages/events/MyEvents";
import EventDetails from "../pages/events/EventDetails";
import EventAdmin from "../pages/events/EventAdmin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LP />} />

      <Route path="/masterclass" element={<MasterclassLanding />} />
      {/* Dynamic route for events */}
      <Route
        path="/masterclass/:masterclassPath"
        element={<MasterclassDetails />}
      />
      {/* Route for registered events */}
      <Route path="/mymasterclass" element={<MyMasterclass />} />

      <Route path="/masterclassadmin" element={<AdminDashboard />} />

      <Route path="/events" element={<EventsLandingpage />} />
      <Route path="/myevents" element={<MyEvents />} />
      <Route path="/events/:eventPath" element={<EventDetails />} />
      <Route path="/eventadmin" element={<EventAdmin />} />
    </Routes>
  );
};

export default AppRoutes;
