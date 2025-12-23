// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import LP from "../pages/Lp";
import MasterclassLanding from "../pages/masterclass/MasterclassLanding";
import MasterclassDetails from "../pages/masterclass/MasterclassDetails";
import MyMasterclass from "../pages/masterclass/MyMasterclass";
import AdminDashboard from "../pages/masterclass/AdminDashboard";

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
    </Routes>
  );
};

export default AppRoutes;
