import React from 'react';
import styled from 'styled-components';

export class Mensagem extends React.Component{
    render() {
    return (
      <div className="mensagem-container">
        <p><strong>{this.props.usuario}</strong></p>
        <p>{this.props.mensagem}</p>
      </div>
    );
  }
}
