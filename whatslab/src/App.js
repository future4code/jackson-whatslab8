import React from 'react';
import styled from 'styled-components';
import {Formulario} from './components/Formulario';

const AppContainer = styled.div`
  width: 440px;
  background: gray;
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  border-radius: 20px;
`

class App extends React.Component{
  render() {
    return (
      <AppContainer>
        <Formulario/>
      </AppContainer>
    );
  }
}
export default App;
