import React, { Component } from "react";
import './estilos.css'
class App extends Component{
  
constructor(props){
  super(props);
  this.state={
    textoFase:''
    }
  this.frases=['ola','v0','d']
this.frases = [
  "A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa continuar em movimento. - Albert Einstein",
  "Ninguém pode fazer você se sentir inferior sem o seu consentimento. - Eleanor Roosevelt",
  "A felicidade não é algo pronto. Ela vem de suas próprias ações. - Dalai Lama",
  "A imaginação é mais importante que o conhecimento. - Albert Einstein",
  "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
  "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta. - Winston Churchill"
]; 




 this.quebraBiscoito=this.quebraBiscoito.bind(this)
}




quebraBiscoito(){

let sate=this.state;
let numeroAleatorio= Math.floor(Math.random()*this.frases.length);
this.state.textoFase='"'+ this.frases[numeroAleatorio]+'"';
this.setState(this.state)
}

render(){
  return(
    
<div className="container">
  <h1>Biscoitos da Sorte</h1>
  <img className="img" src={require('./assets/biscoito.png')} />
  
  <Botao nome="Abrir Biscoito" acaoBt={this.quebraBiscoito}/>
  <h3 className="textoFase">{this.state.textoFase}</h3>
</div>
  )
}
}

class Botao extends Component{

  render(){
    return(
      <div>
        <button onClick={this.props.acaoBt}>{this.props.nome} </button>
      </div>
    )
  }
}

export default App;