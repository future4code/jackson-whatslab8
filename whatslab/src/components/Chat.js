import React from 'react';
import styled from 'styled-components';
import {Mensagem} from './Mensagem';

const ChatContainer = styled.div`
  width: 90%;
  background-color: #f5e2ae;
  margin: 0 auto;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const MensagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 15%;
`
const FormContainer = styled.div`
  position: fixed;
  bottom: 14%;
  display: flex;
  justify-content: space-around;
  width: 375px;
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
  box-shadow: 0px 0px 4px #57534a;
`
const Button = styled.button`
  height: 30px;
  border: 1px solid gray;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 4px gray;
`

export class Chat extends React.Component {
  state = {
    msg: [], 
    valorInputUsuario: '',
    valorInputMensagem: ''
  }
  enviarMensagem = () => {
    if (this.state.valorInputUsuario === '' || this.state.valorInputMensagem === ''){
      alert('Preencha todos os campos');
    } else {
      const novaMsg = {
        usuario: this.state.valorInputUsuario,
        mensagem: this.state.valorInputMensagem
      }
      const novasMsgs = [...this.state.msg, novaMsg];
      this.setState({msg: novasMsgs});
    };
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
  };
  enviaComEnter = (event) => {
    if(event.key === 'Enter') {
      this.enviarMensagem()
    };
  };
  apagarMensagem = (msgApagada) => {
    const novasMensagens = this.state.msg.filter((msgg) => {
      return msgApagada !== msgg.mensagem
    })
    this.setState({
      msg: novasMensagens
    });
  };
  render() {
    const mensagens = this.state.msg.map((msgUnica) => {
      return (
        <Mensagem
          usuario={msgUnica.usuario}
          mensagem={msgUnica.mensagem}   
          onDoubleClick={() => {this.apagarMensagem(this.msgg.mensagem)}}              
        />
      );
    });  
    return (
      <ChatContainer>
        <MensagemContainer>
          {mensagens}
        </MensagemContainer>
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
            onKeyPress = {this.enviaComEnter}
          />
          <Button onClick={this.enviarMensagem}>Enviar</Button>
        </FormContainer>
      </ChatContainer>
    )
  }
}

