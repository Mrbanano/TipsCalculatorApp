import React from 'react';
import './Calculator.scss';

import FormTips from '../FormTips';
import Result from '../Result';

/**
 * Todo Componente
 * 1. tiene un div con el Nombre del Componente
 * 2. tiene un div con el Nombre del Componente-Container
 * 3. tiene un div con el Nombre del Componente-Content
 * 
 * 
 * 
   App  
      Calculator
          FormTips
            GeneralInput <--- label , icon , initalValue
            Tips
              TipsButton <--- [ 5, 10,15,25 ]
            GeneralInput <--- label , icon , initalValue
          Result
            PersonalAmountd
            PersonalAmount
            ResultButton
 * 
 * Cada Componente que hagan es un commit
 *   git commit -m "[Add] : Se creo y se estilizo el Componente Calculator"
 * 
 */

const Calculator = () => {
  return (
    <div className="Calculator">
      <div className="Calculator-Container">
        <div className="Calculator-Content">
          <FormTips />
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
