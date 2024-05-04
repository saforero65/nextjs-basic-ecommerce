import { Serie } from "@/interfaces/series";
import SeriesPage from "@/pages/series";
import { getSeries } from "@/services/getSeries";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));


jest.mock("../../src/services/getSeries.ts", () => ({
  getSeries: jest.fn(),
}));

describe("Series", () => {
  test("debe mostrar el titulo", () => {
    const series:Serie[] = [
      {
        "key": "0x0a",
        "name": "Shovel Knight"
      },
      {
        "key": "0x0c",
        "name": "Kirby"
      }
    ];
    (getSeries as jest.Mock).mockResolvedValue( series );
    render(<SeriesPage series={series} />);
    
    const title = screen.getAllByText(/Series/i);
    expect(title.length).toBe(2);
  });
});
