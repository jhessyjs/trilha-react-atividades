import { useState } from "react";
import classes from "../Style/contador.module.css";

function Contador(props) {

  const [contador, setContador] = useState(0);

  const subtrair = () => {
    setContador((prevState) => prevState - props.unidadePorClique);
  };

  const adicionar = () => {
    setContador(contador + props.unidadePorClique);
  };


  const onDelete = () => {

    props.onDelete(props.index);
  };

  return (
    <div className={classes.containerBottons}>
      <button onClick={subtrair} className="botao-subtrair">
        -
      </button>
      <span>{contador}</span>
      <button onClick={adicionar} className={classes.botaoAdicionar}>
        +
      </button>

      <button style={{ marginLeft: "20px" }} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contador;