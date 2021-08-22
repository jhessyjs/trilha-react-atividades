const frutas = [
  "pessego",
  "tomate",
  "banana",
  "abacate",
  "pera",
  "maçã",
  "pera",
];

function Frutas() {
  return (
    <div>
      {/* <Contador unidadePorClique={3} /> */}

      <ol>
        {/* {[<li>pessego</li>, <li>tomate</li>, <li>banana</li>, <li>abacate</li>]} */}
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ol>
    </div>
  );
}

export default Frutas;