import { Routes, Route } from "react-router";
import HomeUser from "../pages/user/HomeUser";
import ServicesUser from "../pages/user/ServicesUser";
import LoginClient from "../pages/client/LoginClient";
import RegisterClient from "../pages/client/RegisterClient";
import RegistrationServices from "../pages/client/RegistrationServicesClient";
import SchedulingUser from "../pages/user/SchedulingUser";
import InformationUser from "../pages/user/InformationUser";
import ConfirmationSchedulerUser from "../pages/user/ConfirmationSchedulerUser";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />}></Route>
      <Route path="/home" element={<HomeUser />}></Route>
      <Route path="/services" element={<ServicesUser />}></Route>
      <Route path="/agendamento" element={<SchedulingUser />}></Route>
      <Route
        path="/informacoesAgendamento"
        element={<InformationUser />}
      ></Route>
      <Route
        path="/confirmacaoAgendamento"
        element={<ConfirmationSchedulerUser />}
      ></Route>

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
