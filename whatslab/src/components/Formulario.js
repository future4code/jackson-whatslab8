import React from 'react';
import styled from 'styled-components';
import {Mensagem} from './Mensagem';

export class Formulario extends React.Component {
  state = {
    msg: [
      {
        usuario: '',
        mensagem: ''
      }
    ], 
    valorInputUsuario: '',
    valorInputMensagem: ''
  }
  enviarMensagem = () => {
    const novaMsg = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }
    const novasMsgs = [...this.state.msg, novaMsg];
    this.setState({msg: novasMsgs});
  };
  onChangeUsuario = (event) => {
    this.setState({
      valorInputUsuario: event.target.value
    })
  }
  onChangeMensagem = (event) => {
    this.setState({
      valorInputMensagem: event.target.value
    })
  }
  render() {
    const mensagens = this.state.msg.map((msgUnica) => {
      return (
        <Mensagem
          usuario={msgUnica.usuario}
          mensagem={msgUnica.mensagem}
        />
      );
    });
    return (
      <div className='chat-container'>
        {mensagens}
        <div className="formulario-container">
          <input
            value={this.state.usuario}
            onChange={this.onChangeUsuario}
            placeholder={'Usuário'}
          />
          <input
            value={this.state.mensagem}
            onChange={this.onChangeMensagem}
            placeholder={'Mensagem'}
          />
          <button onClick={this.enviarMensagem}>Enviar</button>
        </div>
      </div>
    )
  }
}

