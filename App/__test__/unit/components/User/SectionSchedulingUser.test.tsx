import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, Mock } from "vitest";
import SectionSchedulingUser from "../../../../src/components /user/SchedulingUser/SectionScheduling";
import { useNavigate } from "react-router";
import useAppointmentsByHour from "../../../../src/hooks/useAppointmentsByHour";

vi.mock("../../../../src/hooks/useAppointmentsByHour");
vi.mock("react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("SectionSchedulingUser", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    (useAppointmentsByHour as Mock).mockReturnValue({
      hours: {
        availableTimes: [
          { id: "1", time: "10h00" },
          { id: "2", time: "11h00" },
        ],
        occupiedTimes: [],
      },
      loading: false,
      error: null,
    });
  });

  it("should render loading state", () => {
    (useAppointmentsByHour as Mock).mockReturnValue({
      hours: { availableTimes: [], occupiedTimes: [] },
      loading: true,
      error: null,
    });

    render(<SectionSchedulingUser />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("should render error message when there is an error", () => {
    (useAppointmentsByHour as Mock).mockReturnValue({
      hours: { availableTimes: [], occupiedTimes: [] },
      loading: false,
      error: "Erro ao carregar horários",
    });

    render(<SectionSchedulingUser />);
    expect(screen.getByText("Erro ao carregar horários")).toBeInTheDocument();
  });

  it("should display available times correctly", () => {
    render(<SectionSchedulingUser />);

    expect(screen.getByLabelText("10h00")).toBeInTheDocument();
    expect(screen.getByLabelText("11h00")).toBeInTheDocument();
  });
});
