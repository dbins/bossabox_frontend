import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const RemoveButton = styled.button`
  background-color: #365df0;
  color: #ffffff;
  width: 100px;
  height: 30px;
`;

export const Repository = styled.div`
  width: 850px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 15px;

  header {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  strong {
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #666;
  }
`;

export const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const ContainerTags = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const Tag = styled.span`
  margin: 10px;
`;
