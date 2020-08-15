import React from 'react';
import styled from 'styled-components';
import {Chat} from './components/Chat';

const AppContainer = styled.div`
  width: 440px;
  background: #fc7b03;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 0 7px black;
`
const Titulo = styled.h1`
  font-family: Philosopher, Arial;
  color: white;
  text-shadow: 0 0 3px black;
  text-align: center;
  font-size: 220%;
`
const Descricao = styled.h3`
  color: #d9d5ca;
  text-align: center;
  font-size: 110%;
  padding: 0 10px;
  font-family: Roboto Condensed;
;
`

class App extends React.Component{
  render() {
    return (
      <AppContainer>
        <Titulo>WhatsLab</Titulo>
        <Chat/>
        <Descricao>Projeto feito por Ana Flávia Rodrigues e Alice Souza. <br></br>Labenu - 2020.</Descricao>
      </AppContainer>
    );
  }
}
export default App;
