import React from "react";
import Modal from "react-modal";
import { PropTypes } from "prop-types";
import {
  RemoveButton,
  CancelButton,
  ContainerButton,
  SubTitulo,
  TituloModal
} from "./styles.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "700px",
    height: "150px;",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const Excluir = ({ abrir, fechar, deletar, codigo, titulo }) => (
  <Modal
    ariaHideApp={false}
    isOpen={abrir}
    onRequestClose={fechar}
    contentLabel="Modal Excuir"
    style={customStyles}
  >
    <TituloModal>x Remove Tool</TituloModal>
    <SubTitulo>Are you sure you want to remove {titulo}</SubTitulo>
    <ContainerButton>
      <CancelButton onClick={fechar}>Cancel</CancelButton>
      <RemoveButton onClick={() => deletar(codigo)}>Yes, remove</RemoveButton>
    </ContainerButton>
  </Modal>
);
Excluir.propTypes = {
  /** Função que vai excluir a tool */
  deletar: PropTypes.func.isRequired,
  /** Função que vai fechar o modal */
  fechar: PropTypes.func.isRequired,
  /** Booleando que define se a janela pode ser exibida */
  abrir: PropTypes.bool,
  /** ID da tool */
  codigo: PropTypes.number,
  /** Title da tool */
  titulo: PropTypes.string.isRequired
};
export default Excluir;
