import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change input", () => {
    const input = wrapper.find("input");
    const value = "Hola Pepe";

    input.simulate("change", { target: { value } });
  });

  test("should not submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clear input value", () => {
    const value = "Hola Vivi";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });

    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
