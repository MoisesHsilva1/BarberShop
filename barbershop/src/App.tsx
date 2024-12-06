import { BrowserRouter } from "react-router";
import AppRoutes from "./routes";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
