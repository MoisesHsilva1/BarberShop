import { Routes, Route } from "react-router";
import HomeUser from "../pages/user/HomeUser";
import ServicesUser from "../pages/user/ServicesUser";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/Home" element={<HomeUser />}></Route>
      <Route path="/Services" element={<ServicesUser />}></Route>
      <Route path="/client"></Route>
    </Routes>
  );
}
export default AppRoutes;
