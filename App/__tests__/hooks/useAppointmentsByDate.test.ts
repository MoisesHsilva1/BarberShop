import { renderHook, waitFor } from "@testing-library/react";
import useAppointmentsByDate from "../../hooks/useAppointmentsByDate";
import axios from "axios";

jest.mock("axios");

describe("useAppointmentsByDate", () => {
  it("deve retornar agendamentos ao chamar a API com sucesso", async () => {
    const mockResponse = [
      {
        user: {
          userName: "Moisés Henrique",
          userEmail: "moihgm67@gmail.com",
          phoneUser: "11975790729",
        },
        _id: "6772e8bf00183d5c27149c46",
        date: "31 DEZ, TER",
        time: "10h às 10h50",
        services: ["CORTE DE CABELO", "BARBA", "SOBRANCELHA"],
        __v: 0,
      },
    ];

    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const { result } = renderHook(() => useAppointmentsByDate("31 DEZ, TER"));

    expect(result.current.appointments).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.appointments).toEqual(mockResponse);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://localhost:3030/getByDateAppointment?date=31%20DEZ%2C%20TER"
    );
  });

  it("deve retornar erro ao falhar ao chamar a API", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    mockedAxios.get.mockRejectedValueOnce(new Error("Erro na API"));

    const { result } = renderHook(() => useAppointmentsByDate("31 DEZ, TER"));

    expect(result.current.appointments).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.appointments).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe("Erro ao carregar agendamentos.");
    });

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://localhost:3030/getByDateAppointment?date=31%20DEZ%2C%20TER"
    );
  });
});
