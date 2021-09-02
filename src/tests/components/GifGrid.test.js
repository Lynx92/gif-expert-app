import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("GifGrid", () => {
  const gifs = [
    {
      id: 1,
      url: "http://www.w3.org/1999/",
      title: "cosa",
    },
  ];

  useFetchGifs.mockReturnValue({
    data: gifs,
    loading: false,
  });

  const category = "Mola";
  const wrapper = shallow(<GifGrid category={category} />);

  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should not show loading", () => {
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
