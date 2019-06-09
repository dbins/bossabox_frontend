import React from "react";
import Modal from "react-modal";
import { configure, shallow, mount, ReactWrapper } from "enzyme";
import Adicionar from "../Adicionar";
import {
  ActionButton,
  TituloModal,
  LabelFormModal,
  InputFormModal,
  TextareaFormModal,
  FormModal,
  ContainerButton
} from "../Adicionar/styles.js";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = new JSDOM("", { url: "https://example.org/" }).window;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    global[property] = document.defaultView[property];
  }
});

beforeAll(() => {
  const div = document.createElement("div");
  window.domNode = div;
  document.body.appendChild(div);
});

describe("Componente Adicionar", () => {
  it("Deve montar o modal Adicionar e deve ter nove componentes", () => {
    const wrapper = mount(
      <Adicionar isOpen={true} acao={() => {}} fechar={() => {}} abrir={true} />
    );

    //console.log(wrapper.find(TituloModal).debug());

    expect(
      wrapper.find(Modal).instance().props.children[1].props.children.length
    ).toEqual(9);
  });

  it("Deve atualizar o state do modal Adicionar", () => {
    const wrapper = mount(
      <Adicionar isOpen={true} acao={() => {}} fechar={() => {}} abrir={true} />
    );

    const state_inicial = {
      name: "test-tool",
      link: "http://www.google.com.br",
      description: "test-tool description wow",
      tags: ["test", "tool", "wow", "such"]
    };

    wrapper.setState({
      name: state_inicial.name,
      link: state_inicial.link,
      description: state_inicial.description,
      tags: state_inicial.tags
    });
    expect(wrapper.state("name")).toEqual(state_inicial.name);
    expect(wrapper.state("link")).toEqual(state_inicial.link);
    expect(wrapper.state("description")).toEqual(state_inicial.description);
    expect(wrapper.state("tags")).toEqual(state_inicial.tags);
  });

  it("Deve atualizar o state do modal Adicionar ao alterar campos", () => {
    const wrapper = mount(
      <Adicionar isOpen={true} acao={() => {}} fechar={() => {}} abrir={true} />
    );
    const state_inicial = {
      name: "test-tool",
      link: "http://www.google.com.br",
      description: "test-tool description wow",
      tags: ["test", "tool", "wow", "such"]
    };
    //1  - 3 - 5 - 7

    wrapper
      .find(Modal)
      .instance()
      .props.children[1].props.children[1].props.onChange({
        target: { name: "name", value: state_inicial.name }
      });
    wrapper
      .find(Modal)
      .instance()
      .props.children[1].props.children[3].props.onChange({
        target: { name: "link", value: state_inicial.link }
      });
    wrapper
      .find(Modal)
      .instance()
      .props.children[1].props.children[5].props.onChange({
        target: { name: "description", value: state_inicial.description }
      });
    expect(wrapper.state("name")).toEqual(state_inicial.name);
    expect(wrapper.state("link")).toEqual(state_inicial.link);
    expect(wrapper.state("description")).toEqual(state_inicial.description);
  });
});
