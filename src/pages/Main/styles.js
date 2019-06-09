import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  width: 860px;
`;
export const Titulo = styled.h1`
  font-size: 42px;
  color: #ffffff;
  text-align: left;
`;

export const Subitulo = styled.h2`
  font-size: 36px;
  color: #ffffff;
  text-align: left;
`;

export const WrapperInput = styled.div`
  height: 31px;
  padding: 5px;
  background: #fff;
  border-radius: 3px;
`;

export const InputSearch = styled.input`
  flex: 1;
  height: 25px;
  width: 200px;
  padding: 0 20px;
  background: #fff;
  font-size: 20px;
  color: #444;
  border-style: none;
`;

export const CheckboxSearch = styled.input`
  flex: 1;
  height: 25px;
  padding: 0 20px;
  background: #fff;
  margin-left: 10px;
  font-size: 36px;
  color: #444;
  border-radius: 3px;
`;

export const LabelSearch = styled.span`
  font-weight: normal;
  font-size: 20px;
  margin-left: 10px;
  text-align: left;
  color: #ffffff;
`;

export const ButtonAdicionar = styled.button`
  width: 100px;
  height: 25px;
  padding: 0 20px;
  margin-left: 10px;
  background-color: #365df0;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-weight: normal;
  border-radius: 3px;

  &:hover {
    background: #52d89f;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Busca = styled.div`
  display: flex;
`;
