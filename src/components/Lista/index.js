import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Repository,
  ContainerConteudo,
  ContainerTags,
  Tag,
  RemoveButton
} from "./styles"; //Quando nao tem exports default, tem que usar o {}
import PropTypes from "prop-types";
//Stateless recebe props
const List = ({ acao, repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <ContainerConteudo>
          <header>
            <Link to={repository.link} target="_blank">
              <strong>{repository.title}</strong>
            </Link>
            <small>{repository.description}</small>
          </header>
          <RemoveButton
            onClick={() => {
              acao(repository);
            }}
          >
            x remove
          </RemoveButton>
        </ContainerConteudo>
        <ContainerTags>
          {repository.tags instanceof Array &&
            repository.tags.map(tag => <Tag key={tag}>#{tag} </Tag>)}
        </ContainerTags>
      </Repository>
    ))}
  </Container>
);

//depende do modulo prop-types
List.propTypes = {
  //Array de objetos
  /** Array com os dados das tools recuperadas da API */
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.array
    })
  ),
  /** Função que vai exibir o modal de excluir */
  acao: PropTypes.func.isRequired
};

export default List;
