import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ViewAppointment from "../../../../src/components/templates/admin/ViewAppointment";
import useAppointmentsByDate from "../../../../src/hooks/useAppointmentsByDate";
import React from "react";
import { Mock } from "vitest";

vi.mock("../../../../src/hooks/useAppointmentsByDate", () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe("SectionViewSchedulingClient", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should display message when there are no appointments", () => {
    (useAppointmentsByDate as Mock).mockReturnValue({
      appointments: [],
      loading: false,
      error: null,
    });
    render(<ViewAppointment />);
    expect(
      screen.getByText(/Nenhum agendamento para este dia/i)
    ).toBeInTheDocument();
  });

  it("should display appointments when available", () => {
    (useAppointmentsByDate as Mock).mockReturnValue({
      appointments: [
        {
          user: { userName: "João", phoneUser: "123456789" },
          time: "14:00",
          services: ["Corte de cabelo", "Barba"],
        },
      ],
      loading: false,
      error: null,
    });
    render(<ViewAppointment />);
    expect(screen.getByText("João")).toBeInTheDocument();
    expect(screen.getByText("CONTATO: 123456789")).toBeInTheDocument();
    expect(screen.getByText("HORÁRIO: 14:00")).toBeInTheDocument();
    expect(screen.getByText("Corte de cabelo")).toBeInTheDocument();
    expect(screen.getByText("Barba")).toBeInTheDocument();
  });

  it("should disable navigation buttons when loading", () => {
    (useAppointmentsByDate as Mock).mockReturnValue({
      appointments: [],
      loading: true,
      error: null,
    });
    render(<ViewAppointment />);
    expect(screen.getAllByRole("button")[0]).toBeDisabled();
    expect(screen.getAllByRole("button")[1]).toBeDisabled();
  });

  it("should change the date when navigation buttons are clicked", () => {
    (useAppointmentsByDate as Mock).mockReturnValue({
      appointments: [],
      loading: false,
      error: null,
    });
    render(<ViewAppointment />);

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[0]);
  });
});
