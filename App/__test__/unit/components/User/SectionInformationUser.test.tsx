import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import SectionInformationUser from "../../../../src/components /user/InformationUser/SectionInformationUser";
import React from "react";

vi.mock("react-router", () => ({
  useNavigate: () => vi.fn(),
}));

describe("SectionInformationUser", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render input fields correctly", () => {
    render(<SectionInformationUser />);

    expect(screen.getByPlaceholderText("NOME:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("TELEFONE:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-MAIL:")).toBeInTheDocument();
  });

  it("should show error message for invalid phone number", () => {
    render(<SectionInformationUser />);

    const phoneInput = screen.getByPlaceholderText("TELEFONE:");

    fireEvent.change(phoneInput, { target: { value: "12345" } });
    expect(screen.getByText("Número de telefone inválido")).toBeInTheDocument();

    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    expect(
      screen.queryByText("Número de telefone inválido")
    ).not.toBeInTheDocument();
  });

  it("should show error message for invalid email", () => {
    render(<SectionInformationUser />);

    const emailInput = screen.getByPlaceholderText("E-MAIL:");

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    expect(screen.getByText("E-mail inválido")).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: "valid@email.com" } });
    expect(screen.queryByText("E-mail inválido")).not.toBeInTheDocument();
  });

  it("should disable the button if fields are not filled", () => {
    render(<SectionInformationUser />);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();

    fireEvent.change(screen.getByPlaceholderText("NOME:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("TELEFONE:"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText("E-MAIL:"), {
      target: { value: "john@example.com" },
    });

    expect(button).toBeEnabled();
  });

  it("should open the confirm modal when the button is clicked", () => {
    render(<SectionInformationUser />);

    fireEvent.change(screen.getByPlaceholderText("NOME:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("TELEFONE:"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText("E-MAIL:"), {
      target: { value: "john@example.com" },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(
      screen.getByText(
        "Você está prestes a confirmar o agendamento. Deseja continuar?"
      )
    ).toBeInTheDocument();
  });

  it("should save the user information and navigate on confirm", async () => {
    const navigate = vi.fn();
    render(
      <MemoryRouter>
        <SectionInformationUser />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("NOME:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("TELEFONE:"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText("E-MAIL:"), {
      target: { value: "john@example.com" },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    fireEvent.click(screen.getByText("Confirmar"));

    await waitFor(() => {
      expect(localStorage.getItem("fullAppointmentData")).not.toBeNull();
    });
  });
});
