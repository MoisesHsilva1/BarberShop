import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ServicesSection from "../../../../src/components /user/ServicesUser/ServicesSection";
import { BrowserRouter as Router } from "react-router-dom";

vi.mock("react-router", () => ({
  useNavigate: vi.fn(),
}));

global.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};

describe("ServicesSection", () => {
  it("should render services correctly", () => {
    render(
      <Router>
        <ServicesSection />
      </Router>
    );

    expect(screen.getByText("CORTE DE CABELO")).toBeInTheDocument();
    expect(screen.getByText("BARBA")).toBeInTheDocument();
    expect(screen.getByText("SOBRANCELHA")).toBeInTheDocument();
  });

  it("should add and remove services when clicking checkboxes", () => {
    render(
      <Router>
        <ServicesSection />
      </Router>
    );

    const checkboxCorteCabello = screen.getByLabelText("CORTE DE CABELO");
    const checkboxBarba = screen.getByLabelText("BARBA");

    expect(checkboxCorteCabello).not.toBeChecked();
    expect(checkboxBarba).not.toBeChecked();

    fireEvent.click(checkboxCorteCabello);
    expect(checkboxCorteCabello).toBeChecked();

    fireEvent.click(checkboxBarba);
    expect(checkboxBarba).toBeChecked();

    fireEvent.click(checkboxCorteCabello);
    expect(checkboxCorteCabello).not.toBeChecked();
  });

  it("should disable the save button when no service is selected", () => {
    render(
      <Router>
        <ServicesSection />
      </Router>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should enable the save button when at least one service is selected", () => {
    render(
      <Router>
        <ServicesSection />
      </Router>
    );

    const checkboxCorteCabello = screen.getByLabelText("CORTE DE CABELO");
    const button = screen.getByRole("button");

    fireEvent.click(checkboxCorteCabello);

    expect(button).toBeEnabled();
  });
});
