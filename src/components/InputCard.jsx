import '../styles/InputCard.css';

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';


function InputCard() {

    const [listTask, setListTask ] = useState([]);
    const [taskCurrent, setTaskCurrent] = useState("");

    
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
      <div className="container-add-task">
          <ul className="container-add-task">
            { listTask.map((task) => (
                <li key={task} className="card" >
                  <span cols="30" rows="10">{task}</span>
                  <button onClick={() => handleRemoveTask(task)} type="button">
                    <FiTrash size={16}/>
                  </button> 
                </li>
                
             ))}
          </ul>
      </div>
    </> 

    
    );

   function handleAddNewtask(){
    
    setListTask([...listTask, taskCurrent]);
    setTaskCurrent("")
    
   }


   function handleRemoveTask(id) {
      
    const tasklist = listTask.filter((task) => task !== id)

    setListTask(tasklist)
   }
}





  
  export default InputCard;  