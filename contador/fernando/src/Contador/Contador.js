import { useState } from "react";
import classes from "./contador.module.css";

function Contador(props) {
  // props.unidadePorClique
  const [contador, setContador] = useState(0);

  const subtrair = () => {
    // setContador(contador - props.unidadePorClique);
    setContador((prevState) => prevState - props.unidadePorClique);
    console.log(contador);
  };

  const adicionar = () => {
    setContador(contador + props.unidadePorClique);
    console.log(contador);
  };

  
  const onDelete = () => {
    props.onDelete(props.index);
  };

  return (
    <div>
      <h3>Contador {props.index}</h3>
      <button onClick={subtrair} className="botao-subtrair">
        -
      </button>
      <span>{contador}</span>
      <button onClick={adicionar} className={classes.botaoAdicionar}>
        +
      </button>

      <button style={{ marginLeft: "20px" }} onClick={onDelete}>
        Del
      </button>
    </div>
  );
}


export default Contador;


