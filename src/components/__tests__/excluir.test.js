//https://blog.theodo.com/2017/04/enzyme-fast-and-simple-react-testing/
import React from "react";
import { findDOMNode } from "react-dom";
import Modal from "react-modal";
import { configure, shallow, mount, render, ReactWrapper } from "enzyme";
import Excluir from "../Excluir";
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

describe("Componente Excluir", () => {
  it("Deve receber a prop titulo e retonar o seu valor", () => {
    const wrapper = mount(
      <Excluir
        titulo={"TESTE"}
        codigo={0}
        deletar={() => {}}
        fechar={() => {}}
      />
    );
    expect(wrapper.prop("titulo")).toEqual("TESTE");
  });

  it("Deve receber a prop codigo e retonar o seu valor", () => {
    const wrapper = mount(
      <Excluir
        titulo={"TESTE2"}
        codigo={5}
        deletar={() => {}}
        fechar={() => {}}
      />
    );
    expect(wrapper.prop("codigo")).toEqual(5);
  });

  it("Deve montar o modal Excluir com o nome do produto", () => {
    const wrapper = mount(
      <div id="root">
        <Excluir
          isOpen={true}
          titulo={"TESTE"}
          codigo={0}
          deletar={() => {}}
          fechar={() => {}}
        />
      </div>
    );
  
	//console.log(wrapper.find(Modal).instance());
	//console.log(wrapper.find(Modal).instance().portal);
	//console.log(wrapper.find(Modal).instance().props.children[3]); //children guarda os elementos do Modal
	//console.log(wrapper.find(Modal).instance().props.children[3].props.children.join(''));
	
    //console.log(wrapper.find(Modal).debug());
    expect(wrapper.find(Modal).instance().props.children[1].props.children.join('')).toEqual("Are you sure you want to remove TESTE");
  });

  it("Deve montar o modal Excluir com o nome do produto e deve ter dois botões", () => {
    const wrapper = mount(
      <Excluir
        isOpen={true}
        titulo={"TESTE"}
        codigo={0}
        deletar={() => {}}
        fechar={() => {}}
      />
    );
	 expect(wrapper.find(Modal).instance().props.children[2].props.children.length).toEqual(2);
  });
});
