import { Routes, Route } from "react-router";
import User from "../pages/User";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/user" element={<User />}></Route>

      <Route path="/client"></Route>
    </Routes>
  );
}
export default AppRoutes;
