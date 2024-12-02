// import Login from "@/app/login/page";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { setupServer } from "msw/node";
import { http } from "msw";
import { env } from "@/config/env";
import Login from "@/app/login/page";

jest.mock("next/navigation", () => require("next-router-mock"));

const server = setupServer(
  http.post(`${env.apiBaseUrl}/user/login`, () => {
    return Response.json({
      identidade: "36070342810",
      senha: "LOREEEM"
    })
  }),
  // http.get(`${env.apiBaseUrl}/produto/1`, () => {
  //   return Response.json({
  //     produto: {
  //       id: 1,
  //       descricao: "Bolacha",
  //       marca: "Trakinas",
  //       valor: 1.99,
  //       peso_gramas: 100,
  //       sabor: "morango",
  //     },
  //   });
  // })
);

describe("Login user", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("/login");
    server.listen();
  });
  afterAll(() => {
    server.close();
  });
  it("should render product list", async () => {
    render(<Login />);

    screen.getByTestId("teste");

    await screen.findByRole("cell", {
      name: "Trakinas",
    });

    screen.logTestingPlaygroundURL();
  });
});
