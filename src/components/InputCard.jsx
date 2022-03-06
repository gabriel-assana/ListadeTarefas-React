import '../global.css';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { CardTask } from './CardTask';

function InputCard() {

    const [listTask, setListTask ] = useState([]);
    const [taskCurrent, setTaskCurrent] = useState("");

    const task = {
      id: Math.random(),
      description: taskCurrent,
      isComplete: false,
      visible: true,
    }

    function handleAddNewtask(){

      if(!task.description){
        
       return alert('Não é possivel inserir Task Cards vazios !')
        
      }
      setListTask([...listTask, task]);
      setTaskCurrent("")
      
     }
              
    return (
    <>
      <div className="container-input-task">
          <input className="input-task" 
                 type="text" 
                 placeholder='digite sua nova tarefa'
                 value={taskCurrent}
                 onChange={(e) => setTaskCurrent(e.target.value)}
                 />
          <button className="btn-add" onClick={handleAddNewtask}><FaPlus/></button>
      </div>
      <CardTask listTask = { listTask } setListTask = { setListTask }/>
    </> 
    );

}
  
  export default InputCard;  