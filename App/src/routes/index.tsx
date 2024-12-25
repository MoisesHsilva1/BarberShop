import { Routes, Route } from "react-router";
import HomeUser from "../pages/user/HomeUser";
import ServicesUser from "../pages/user/ServicesUser";
import LoginClient from "../pages/client/LoginClient";
import RegisterClient from "../pages/client/RegisterClient";
import RegistrationServices from "../pages/client/RegistrationServicesClient";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomeUser />}></Route>
      <Route path="/services" element={<ServicesUser />}></Route>
      <Route path="/login" element={<LoginClient />}></Route>
      <Route path="/register" element={<RegisterClient />}></Route>
      <Route
        path="/registrationServices"
        element={<RegistrationServices />}
      ></Route>
    </Routes>
  );
}
export default AppRoutes;
