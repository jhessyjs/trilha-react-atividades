import './App.css';
import React, { useState } from 'react';
import Contador from "./Contador/Contador";

function App(){
  /**
   * 1. Renderizar vários contadores
   * 2. Um botão para adicionar um contador novo
   * 3. Input para armazenar a unidade por contador
   */

  //->abordagem por array
  const [counts, setCounts] = useState([]);
  const [unitPerClick, setUnitPerClick] = useState(1);

  const addContador = (id) => {
    //.push(<Contador />) -> altera o array original
    // .concat(<Contador />) -> não altera o array original
    //setContadores()
    setCounts((contadoresAtuais) => 
      contadoresAtuais.concat(new Date().getTime())     
    );
  };

  // addEventListener('onChange', function(event) { event.target.value })
  const handleOnChange = (event) => {
    // console.log(event.target.value);
    // Number(), parseInt(), +event.target.value
    setUnitPerClick(Number(event.target.value));
  };

  // ESSA EH A FUNCAO QUE VOU PASSAR PARA O CONTADOR
  const removerContador = (idContador) => {
    console.log(`opa, bora remover esse contador ${idContador}`);
    // recebe o estado
    // retorna o novo
    setCounts((counts) => {
      return counts.filter((id) => id !== idContador);        
    });  
  };

  return (
       
    <div className='container'>  
        <div>
          <label>Unidade</label>          
          <input type='Number' onChange={handleOnChange} />  
        </div>
        <button  id="addCount" onClick={addContador}>
          <span>Add Contador</span>
        </button>
    
        {counts.map((id) => (        
          <Contador 
            key={id} 
            unitPerClick={unitPerClick}
            onDelete={removerContador}
            index={id}/>                    
        ))} 
    </div>
  );
 
}

export default App;
