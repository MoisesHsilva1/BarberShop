import { Routes, Route } from "react-router";
import HomeUser from "../pages/user/HomeUser";
import ServicesUser from "../pages/user/ServicesUser";
import SchedulingUser from "../pages/user/SchedulingUser";
import InformationUser from "../pages/user/InformationUser";
import ConfirmationSchedulerUser from "../pages/user/ConfirmationSchedulerUser";
import ContactUser from "../pages/user/ContactUser";
import ViewSchedulingClient from "../pages/client/ViewSchedulingClient";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />}></Route>
      <Route path="/home" element={<HomeUser />}></Route>
      <Route path="/servicos" element={<ServicesUser />}></Route>
      <Route path="/contato" element={<ContactUser />}></Route>
      <Route path="/agendamento" element={<SchedulingUser />}></Route>
      <Route
        path="/informacoesAgendamento"
        element={<InformationUser />}
      ></Route>
      <Route
        path="/confirmacaoAgendamento"
        element={<ConfirmationSchedulerUser />}
      ></Route>
       <Route
        path="/visualizarAgendamentos"
        element={<ViewSchedulingClient />}
      ></Route>
    </Routes>
  );
}
export default AppRoutes;
