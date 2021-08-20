import {useState} from "react";

const frutas = ["banana", "mamão", "pêra", "maçã", "abacaxi", "cacau"]

function App() {
  return (
    <div>
      <ol>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ol>
    </div>
  );
}

function Contador(props) {

  const [contador, setContador] = useState(0);

  const subtrair =() => {
    setContador(contador - props.unidadePorClique);
    console.log(contador);
  }

  const adicionar = () => {
    setContador(contador + props.unidadePorClique);
    console.log(contador);
  }

  return (
    <div>
      <button onClick={subtrair}>-</button>
      <span>{contador}</span>
      <button onClick={adicionar}>+</button>
    </div>
  );
}

export default App;