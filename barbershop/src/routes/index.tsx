import { Routes, Route } from "react-router";
import HomeUser from "../pages/user/HomeUser";
import ServicesUser from "../pages/user/ServicesUser";
import LoginClient from "../pages/client/LoginClient";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomeUser />}></Route>
      <Route path="/services" element={<ServicesUser />}></Route>
      <Route path="/client/login" element={<LoginClient />}></Route>
    </Routes>
  );
}
export default AppRoutes;
