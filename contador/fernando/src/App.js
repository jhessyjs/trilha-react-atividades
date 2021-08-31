import { useState } from "react";
import Contador from "./Contador/Contador";

function App() {

  const [contadores, setContadores] = useState([]);

  const [unidadePorClique, setUnidadePorClique] = useState(1);


  let [indexContador, setIndex] = useState(1);
  const adicionarContador = () => {

    setContadores((contadoresAtuais) =>
      contadoresAtuais.concat(indexContador)
    );
    setIndex(indexContador + 1)
    console.log(indexContador)
  };

  

  const nomeDaClasse = "button";

 
  const handleOnChange = (event) => {
   
    setUnidadePorClique(Number(event.target.value));
  };


  
  const removerContador = (idContador) => {
    console.log(`opa, bora remover esse contador ${idContador}`);

    setContadores((contadores) => {
      return contadores.filter((id) => id !== idContador);
    });
  };


  

  return (
    <div>
      <label htmlFor="unidadePorClique">Unidade</label>
      <input id="unidadePorClique" type="text" onChange={handleOnChange} />

      <button className={nomeDaClasse} onClick={adicionarContador}>
        Adicionar contador
      </button>

      {contadores.map((id) => (
        <Contador
          key={id}
          unidadePorClique={unidadePorClique}
          onDelete={removerContador}
          index={id}

        />

      ))}

    </div>

  );
}

export default App;
