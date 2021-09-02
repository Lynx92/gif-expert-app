import { getGifs } from "../../helpers/getGifs";

describe("getGifs", () => {
  test("should get elements", async () => {
    const gifs = await getGifs("Culo");

    expect(gifs.length).toBe(50);
  });

  test("should not get elements", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
