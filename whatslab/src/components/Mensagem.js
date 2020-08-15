import React from 'react';
import styled from 'styled-components';

const MsgContainer = styled.div`
  background: white;
  border-radius: 0 11px 11px 11px;
  box-shadow: 0 0 3px #fc7b03;
  width: 180px;
  margin: 10px 0 10px 10px;
  padding: 10px
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
  };
};
