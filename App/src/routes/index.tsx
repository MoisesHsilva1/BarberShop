import { Routes, Route } from "react-router";
import HomePage from "../components/pages/user/HomePage";
import ContactPage from "../components/pages/user/ContactPage";
import ServicesPage from "../components/pages/user/ServicesPage";
import AppointmentPage from "../components/pages/user/AppointmentPage";
import ConfirmationAppointmentPage from "../components/pages/user/ConfirmationAppointmentPage";
import ViewAppointmentPage from "../components/pages/admin/ViewAppointmentPage";
import RegisterPage from "../components/pages/account/RegisterPage";
import LoginPage from "../components/pages/account/LoginPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/servicos" element={<ServicesPage />}></Route>
      <Route path="/contato" element={<ContactPage />}></Route>
      <Route path="/agendamento" element={<AppointmentPage />}></Route>
      <Route path="/cadastro" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="/confirmacaoAgendamento"
        element={<ConfirmationAppointmentPage />}
      ></Route>
      <Route
        path="/visualizarAgendamentos"
        element={<ViewAppointmentPage />}
      ></Route>
    </Routes>
  );
}
export default AppRoutes;
