import React from "react";
import { configure, shallow, mount } from "enzyme";
import Lista from "../Lista";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const dados = [
  {
    title: "test-tool",
    link: "http://www.google.com.br",
    description: "test-tool description wow",
    tags: ["test", "tool", "wow", "such"],
    id: 5
  },
  {
    title: "test-tool 2",
    link: "http://www.google.com.br",
    description: "test-tool description wow",
    tags: ["test", "tool", "wow", "such"],
    id: 6
  }
];
describe("Componente Lista", () => {
  it("Deve montar lista", () => {
    const registros = dados.length;
    const wrapper = shallow(
      <Lista repositories={dados} acao={() => {}} />
    ).dive();
    //console.log(wrapper.html());
    expect(wrapper.find("header")).toHaveLength(registros);
  });
});
