import { mount } from "@vue/test-utils";
import Pane from "@/components/Pane.vue";

describe("Pane.vue", () => {
  it("sets textearea's value", () => {
    const value = "typed";
    const wrapper = mount(Pane, {
      propsData: { value }
    });
    //initial value from props
    expect(wrapper.find("textarea").element.value).toContain(value);
  });

  it("v-model works", () => {
    const value = "typing test 1";
    const wrapper = mount(Pane, {
      propsData: { value }
    });

    //emitting input manually
    wrapper.vm.$emit("input", value);
    expect(wrapper.emitted().input[0]).toEqual([value]);

    //typing to textarea
    wrapper.find("textarea").element.value = "ahoy";
    wrapper.find("textarea").trigger("input");
    expect(wrapper.emitted().input[1]).toEqual(["ahoy"]);

    //changing propsdata (it won't emit the input event but will change the value of textarea)
    wrapper.setProps({ value: "ok" });
    expect(wrapper.find("textarea").element.value).toEqual("ok");
  });

  it("renders title without footer", () => {
    const wrapper = mount(Pane, {
      slots: {
        title: "<div>Some Title</div>"
      }
    });
    expect(wrapper.text()).toContain("Some Title");
    expect(wrapper.html()).not.toContain("pane__footer");
  });

  it("renders title and footer", () => {
    const wrapper = mount(Pane, {
      slots: {
        title: "<div>Some Title</div>",
        footer: "<div>Some Footer</div>"
      }
    });
    expect(wrapper.text()).toContain("Some Title");
    expect(wrapper.text()).toContain("Some Footer");
    expect(wrapper.html()).toContain("pane__footer");
  });
});
