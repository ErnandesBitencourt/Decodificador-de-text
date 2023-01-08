import React, { useState } from "react";
import atencao from "./img/atencao.png"
import imagem from "./img/imagem.png"
import './App.css';
function App() {
  const [text1,setText1] = useState('')
  const [criptografar,setCriptografar] = useState('')
  const onChange = (e) => {
   return setText1(e.target.value)
  }

  const butoonCriptografa = () => {
    const criptografar1 = text1.replace('a','ai').replace('e','enter').replace('i','imes').replace('o','ober').replace('u','ufat').replace(" ","-")
    return  setCriptografar(criptografar1);
  };
  
  const butoonDescriptografa = () => {
    const Descriptografar = text1.replace('ai','a').replace('enter','e').replace('imes','i').replace('ober','o').replace('ufat','u')
    return setCriptografar(Descriptografar);
  };
  const buttonCopiar = () => {
         return alert(`copiado com sucesso`)  
  };
 
  return (
    <main className="main" >
      <header className="header-container" > 
        <h1 className="h1-header">A</h1>
      </header>
      <section className="section-container">
          <article className="article" >
              <div className="div-textarea">
                  <textarea className="textarea" placeholder="Digite seu texto!"type={"text"} onChange={onChange} value={text1} />
              </div>
              <div className="div-buttons-containier">
                    <span className="span-p">
                      <img className="img-atencao" src={atencao} alt="img-atençaõ"/>
                      <p className="text-p-atencao">Apenas letras minúsculas e sem acento. </p>
                    </span>
                    <span className="span-button">
                      <button className="buttons" onClick={()=>butoonCriptografa()}>Criptografá </button>
                      <button className="buttons" onClick={()=>butoonDescriptografa()} > Descriptografá</button>
                  </span>
              </div>
          </article>
          <aside className="aside">
            <div className="img-texto">
               {criptografar.length > 0 ? <div className="texto-crip-ou-desc" >{criptografar}</div> : <div className="img-texto2" > <img className="img-mensagem" src={imagem} alt="img de não tem nenhum texto digitado"/> <div className="container-texto"> <p className="p-nenhuma">Nenhuma mensagem encontrada</p> <p className="segundo-texto">Digite um texto que você deseja criptografá ou descriptografar</p>  </div> </div>}
               
            </div>
            <div className="div-container-button-copy">
              {criptografar.length > 0 ? <button className="buttons" onClick={()=>buttonCopiar()}> Copia </button> : ""}
            </div>
          </aside>
      </section>

      <footer >
        <p className="name-dev">Desenvolvido por Ernandes Bitencourt </p>
      </footer>
    </main>
  );
}

export default App;
