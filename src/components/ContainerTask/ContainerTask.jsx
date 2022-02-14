import './ContainerTask.css';

import React, { useState } from 'react';

import Card from '../Card/Card';
import InputCard from '../InputCard/InputCard';

function ContainerTask() {

  let [lista, setLista] = useState([])

    return (
      <div className="container-task">
        <InputCard/>
          <Card/>
      </div>
    );
  }
  
  export default ContainerTask;
  