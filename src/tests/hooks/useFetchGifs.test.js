import useFetchGifs from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("useFetchGifs", () => {
  test("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("should return images & not loading", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Deku")
    );

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
