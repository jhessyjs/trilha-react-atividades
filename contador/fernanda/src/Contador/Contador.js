import React, { useState } from 'react';
import classes from "./contador.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faMinus, faPlus, faTrashAlt, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, faMinus, faPlus, faTrashAlt, faRedo);


function Contador(props) {
    //props.unidadePorClique
    const [count, setCount] = useState(0);

    const sum = () => {
      setCount(count + props.unitPerClick);
    };
  
    const subtract = () => {
      //setCount(count - props.unitPerClick)
      setCount((prevState) => prevState - props.unitPerClick);
    };
  
    const clean = () => {
      setCount(0)
    };

    // ESSA É A FUNÇÃO DO COMPONENTE CONTADOR
    const onDelete = () => {
      // ESTOU CHAMANDO A FUNCAO QUE "MEU PAI" ME PASSOU
      props.onDelete(props.index);
    };

    return (     
        <div className='container'>  
   
          <div className="center">  
              <div>
                  <button id='btn2' onClick={subtract}><span><FontAwesomeIcon icon="minus" /></span></button>
              </div>
      
              <div id='times'>
                  <h2>{count}</h2>
              </div> 
      
              <div>
                  <button id='btn' onClick={sum}><span><FontAwesomeIcon icon="plus" /></span></button>  
              </div>
      
              <div>
                  <button id='btn3' onClick={clean} className={classes.botaoAdicionar}><span><FontAwesomeIcon icon="redo" /></span></button>
              </div>

              <div>
                  <button id='btn3' onClick={onDelete}><span><FontAwesomeIcon icon="trash-alt" /></span></button>
              </div>          
          </div> 

        </div>
    );
  }
  
  export default Contador;
