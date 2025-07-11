import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ConfirmAppointment from "../../../../src/components/templates/user/ConfirmAppointment"
import { vi } from "vitest";
import React from "react";

beforeEach(() => {
  vi.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
    if (key === "fullAppointmentData") {
      return JSON.stringify({
        date: "10/04/2025",
        time: "14:00",
        services: ["Corte", "Barba"],
      });
    }
    return null;
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test("should render the appointment confirmation message", () => {
  render(<ConfirmAppointment />);

  expect(screen.getByText(/AGENDAMENTO/i)).toBeInTheDocument();
  expect(screen.getByText(/CONFIRMADO/i)).toBeInTheDocument();
  expect(screen.getByText(/COM SUCESSO!/i)).toBeInTheDocument();
});

test("should display the appointment details correctly", () => {
  render(<ConfirmAppointment />);

  expect(screen.getByText("DIA")).toBeInTheDocument();
  expect(screen.getByText("10/04/2025.")).toBeInTheDocument();
  expect(screen.getByText("DE")).toBeInTheDocument();
  expect(screen.getByText("14:00.")).toBeInTheDocument();
  expect(screen.getByText("SERVIÇO:")).toBeInTheDocument();
  expect(screen.getByText("Corte + Barba")).toBeInTheDocument();
});

test("should display 'N/A' if there are no services in the appointment", () => {
  vi.spyOn(Storage.prototype, "getItem").mockReturnValue(
    JSON.stringify({ date: "10/04/2025", time: "14:00", services: null })
  );

  render(<ConfirmAppointment />);
  expect(screen.getByText("N/A")).toBeInTheDocument();
});
