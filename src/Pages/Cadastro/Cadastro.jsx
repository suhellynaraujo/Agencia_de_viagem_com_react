import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";

import './Cadastro.css'
export default function Cadastro(){
    return(
         <>
         
    <Nav/>
    <main className="cadastro">
    <div className="cadastrar">
      <h3>Criar Conta</h3>
      <form>
        <input type="nome" placeholder="Nome"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Senha"/>
        <button className="btn"> Cadastrar </button>
      </form>     
    </div>
  </main>
   
  <Footer></Footer>



 </>
    );
}