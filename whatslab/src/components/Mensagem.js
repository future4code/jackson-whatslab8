import React from 'react';
import styled from 'styled-components';

const MsgContainer = styled.div`
  background: yellow;
  width: 70px;
`
const Messenge = styled.p`
  max-width: 180px;
  margin: 0 auto;
`

export class Mensagem extends React.Component{
    render() {
    return (
      <MsgContainer>
        <p><strong>{this.props.usuario}</strong></p>
        <Messenge>{this.props.mensagem}</Messenge>
      </MsgContainer>
    );
  }
}
