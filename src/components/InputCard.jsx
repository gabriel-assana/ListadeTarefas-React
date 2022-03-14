import '../global.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { CardTask } from './CardTask';

function InputCard() {

    const [listTask, setListTask ] = useState([]);
    const [taskCurrent, setTaskCurrent] = useState("");

    const task = {
      id: Math.random(),
      description: taskCurrent,
      isComplete: false,
      notVisible: true,
    }

    function handleAddNewtask(){

      if(!task.description){
        
        toast.warn(" Não é possivel inserir um Task Cards vazio !")
         
        return
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