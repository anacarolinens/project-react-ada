import BuscandoDados from "./components/BuscandoDados"
import MeuComponente from "./components/MeuComponente"
import MeuContador from "./components/MeuContador"
import MinhaLista from "./components/MinhaLista"

function App() {

  return (
   <div>
     {/* <MeuComponente/>
     <MeuBotao conteudo = 'me clique'/>
     <MeuBotao conteudo = 'depois aqui'/>
     <MeuBotao conteudo = 'por ultimo aqui'/>
     <br/>
     <br/> */}
     <MeuContador/>
     {/* <MinhaLista/>
     <BuscandoDados/> */}
   </div>
   

  )
}
function MeuBotao(props){
  return(
    <button>{ props.conteudo }</button>
  )
}
export default App
