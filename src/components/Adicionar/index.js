import React, { Component } from "react";
import Modal from "react-modal";
import {
  ActionButton,
  TituloModal,
  LabelFormModal,
  InputFormModal,
  TextareaFormModal,
  FormModal,
  ContainerButton
} from "./styles.js";
import { PropTypes } from "prop-types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "570px",
    height: "75%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default class Adicionar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: "",
      description: "",
      tags: ""
    };
  }

  static propTypes = {
    /** Função que vai cadastrar a nova tool */
    acao: PropTypes.func.isRequired,
    /** Função que vai fechar o modal */
    fechar: PropTypes.func.isRequired,
    /** Booleando que define se o modal pode ser exibido */
    abrir: PropTypes.bool.isRequired
  };

  validateUrl = value => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  };

  saveTool = e => {
    e.preventDefault();
    let mensagem = "";
    if (this.state.name === "") {
      mensagem += "Tool name required!";
    }
    if (this.state.link === "") {
      mensagem += "Tool link required!";
    } else {
      if (!this.validateUrl(this.state.link)) {
        mensagem += "Tool link is not valid!";
      }
    }
    if (this.state.description === "") {
      mensagem += "Tool description required!";
    }
    if (this.state.tags === "") {
      mensagem += "Tool tags required!";
    }
    if (mensagem === "") {
      let dados = {};
      dados.title = this.state.name;
      dados.link = this.state.link;
      dados.description = this.state.description;
      dados.tags = String(this.state.tags).split(",");
      this.props.acao(dados);
      //Fechar janela
    } else {
      alert(mensagem);
    }
  };

  render() {
    return (
      <Modal
        ariaHideApp={false}
        isOpen={this.props.abrir}
        onRequestClose={this.props.fechar}
        contentLabel="Add Tool"
        style={customStyles}
      >
        <TituloModal>+ Add new tool</TituloModal>
        <FormModal>
          <LabelFormModal>Tool Name</LabelFormModal>
          <InputFormModal
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <LabelFormModal>Tool Link</LabelFormModal>
          <InputFormModal
            value={this.state.link}
            onChange={e => this.setState({ link: e.target.value })}
          />
          <LabelFormModal>Tool description</LabelFormModal>
          <TextareaFormModal
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
          <LabelFormModal>Tags</LabelFormModal>
          <InputFormModal
            value={this.state.tags}
            onChange={e => this.setState({ tags: e.target.value })}
          />
          <ContainerButton>
            <ActionButton onClick={this.saveTool}>Add Tool</ActionButton>
          </ContainerButton>
        </FormModal>
      </Modal>
    );
  }
}
