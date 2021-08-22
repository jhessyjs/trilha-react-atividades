import { useState } from "react";

// props =
// { 
//     key: index,(valor do reservado do react "não exibido")
//     unidadePorClique: unidadePorClique,
//     onDelete: removerContador,(na propriedade "onDelete" está passando uma função do pai)
//     index: index
// }

function Contador(props) {
    const [contador, setContador] = useState(0);
    const [multiplicador, setMultiplicador] = useState(0);
    const meuEstilo = {};

    const subtrair = () => {
        //setContador((prevState) => prevState - props.unidadePorClick);
        setContador((prevState) => prevState - multiplicador);
    }
    const adicionar = () => {
        //setContador((prevState) => prevState + props.unidadePorClick);
        setContador((prevState) => prevState + multiplicador);
    }
    const onDelete = () => {
        console.log(props);
        props.onDelete(props.index);
    }
    const onChangeNumber = (element) => {
        setMultiplicador(Number(element.target.value));
    }


    return (
        <div className="div-contador" name={props.index}>
            <span className="div-id">ID - {props.index}</span>
            <span className="span-multiplicador">Multiplicador</span><input className="div-multiplicador" type="number" onChange={onChangeNumber} />           
            <div className="div-buttons">
                <button className="button-subtrair" onClick={subtrair}>-</button>
                <span className="div-buttons-numero">{contador}</span>
                <button className="button-adicionar" onClick={adicionar}>+</button>
            </div>
            <button className="div-button-remover" onClick={onDelete}>REMOVER</button>
        </div>
    )
}


export default Contador;