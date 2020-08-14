import React from 'react';
import styled from 'styled-components';
import {Mensagem} from './Mensagem';

const ChatContainer = styled.div`
  width: 420px;
  background-color: #eeb7ee;
  margin: 0 auto;
  height: 90vh;
`
const FormContainer = styled.div`
  position: fixed;
  bottom: 40px;
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin-left: 10px;
` 
const Input = styled.input`
  width: ${(props) => props.tamanho};
  margin-right: 10px;
  height: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 4px gray;
`
const Button = styled.button`
  height: 30px;
  border: 1px solid gray;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 4px gray;
`

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
      <ChatContainer>
        {mensagens}
        <FormContainer>
          <Input
            value={this.state.usuario}
            onChange={this.onChangeUsuario}
            placeholder={'Usuário'}
            tamanho={'90px'}
          />
          <Input
            value={this.state.mensagem}
            onChange={this.onChangeMensagem}
            placeholder={'Mensagem'}
            tamanho={'225px'}
          />
          <Button onClick={this.enviarMensagem}>Enviar</Button>
        </FormContainer>
      </ChatContainer>
    )
  }
}

