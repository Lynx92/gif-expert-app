import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../../GifExpertApp";

describe("GifExpertApp", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show list of categories", () => {
    const categories = ["Boku no Hero", "Final fantasy"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
