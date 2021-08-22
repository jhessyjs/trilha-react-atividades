import "./App.css";
import Contador from "./componentes/Contador.js"
import { useState } from "react";


function App() {
  const [contadores, setContadores] = useState([]);
  const [unidadePorClick, setUnidadePorClick] = useState(0);
  
  const adicionarContador = () => {
    setContadores((contadoresAtuais) => contadoresAtuais.concat(new Date().getTime()));
  }

  const handleOnChange = (event) => {
    setUnidadePorClick(Number(event.target.value));
  }

  const removeContador = (idContador) => {
    setContadores((contadores) => {
      return contadores.filter((id) => {
        return id !== idContador;
      });
    })
  }

  return (
    <div className="bloco-contadores">
      <div className="bloco-botoes">
        <button className="button-novo-contador" onClick={adicionarContador}>Novo contador</button>
        {/* <input className="div-numero" type="number" onChange={handleOnChange} /> */}
      </div>
      {
        contadores.map((id) => (
          <Contador
            key={id}
            index={id}
            unidadePorClick={unidadePorClick}
            onDelete={removeContador}
          />
        ))
      }
    </div>
  );

}




export { App };

