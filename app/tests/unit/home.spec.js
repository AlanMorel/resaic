import { shallowMount } from "@vue/test-utils";
import Home from "@/components/pages/Home.vue";

describe("Home.vue", () => {
    it("renders", () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.find("div").classes()[0]).toMatch("home");
    });
});
