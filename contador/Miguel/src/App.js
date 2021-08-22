import { useState } from "react";
import Contador from "./Components/Contador";
import classes from "./Style/contador.module.css";

function App() {

  const [contadores, setContadores] = useState([]);

  const [unidadePorClique, setUnidadePorClique] = useState(1);

  const adicionarContador = () => {
    setContadores((contadoresAtuais) => contadoresAtuais.concat(new Date().getTime()));
  };

  const nomeDaClasse = "button";

  const handleOnChange = (event) => {

    setUnidadePorClique(Number(event.target.value));
  };

  const removerContador = (idContador) => {
    setContadores((contadores) => {
      return contadores.filter((id) => id !== idContador);
    });
  };



  return (
    <div className={classes.containerGeral}>
      <label htmlFor="unidadePorClique">Unidade</label>
      <input id="unidadePorClique" type="text" onChange={handleOnChange} />

      <button className={nomeDaClasse} onClick={adicionarContador}>Adicionar
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