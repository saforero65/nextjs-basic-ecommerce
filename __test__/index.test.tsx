import { Character } from "@/interfaces";
import HomePage from "@/pages";
import { getCharacters } from "@/services/getChaaracters";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../src/services/getChaaracters.ts", () => ({
  getCharacters: jest.fn(),
}));

describe("Pruebas en Home", () => {
  test("debe mostrar el titulo", () => {
    render(<HomePage characters={[]} />);
    const title = screen.getByText(/Ecommerce/i);
    expect(title).toBeInTheDocument();
  });

  test("Vamos a mostrar los personajes", () => {
    const characters : Character[] = [
        {
          "amiiboSeries": "Animal Crossing",
          "character": "Sandy",
          "gameSeries": "Animal Crossing",
          "head": "04380001",
          "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_04380001-03000502.png",
          "name": "Sandy",
          "release": {
            "au": "2016-11-10",
            "eu": "2016-11-11",
            "jp": "2016-11-03",
            "na": "2016-12-02"
          },
          "tail": "03000502",
          "type": "Card"
        },
        {
          "amiiboSeries": "Animal Crossing",
          "character": "Isabelle",
          "gameSeries": "Animal Crossing",
          "head": "01810101",
          "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01810101-00b40502.png",
          "name": "Isabelle - Winter",
          "release": {
            "au": "2015-11-21",
            "eu": "2015-11-20",
            "jp": "2015-10-29",
            "na": "2016-01-22"
          },
          "tail": "00b40502",
          "type": "Card"
        },
        
      ];
      (getCharacters as jest.Mock).mockResolvedValue(characters);
      render(<HomePage characters={characters} />);
        expect(screen.getByText("Sandy")).toBeInTheDocument();
  });
});
