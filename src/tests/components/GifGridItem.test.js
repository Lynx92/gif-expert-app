import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("GifGridItem", () => {
  const title = "Titulo";
  const url = "http://localhost/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("has p with title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("has an img with url and alt props", () => {
    const img = wrapper.find("img");
    const { src, alt } = img.props();
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("has correct classes", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("card")).toBe(true);
    expect(div.hasClass("animate__animated")).toBe(true);
    expect(div.hasClass("animate__bounceInUp")).toBe(true);
  });
});
