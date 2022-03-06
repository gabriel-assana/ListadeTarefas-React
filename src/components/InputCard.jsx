import '../styles/InputCard.css';

import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';

function InputCard() {

    const [listTask, setListTask ] = useState([]);
    const [taskCurrent, setTaskCurrent] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(true);
    
    const task = {
      id: Math.random(),
      description: taskCurrent,
      isComplete: false,
    }


    function handleAddNewtask(){

      if(!task.description){
        
       return alert('Não é possivel inserir Task Cards vazios !')
        
      }
      setListTask([...listTask, task]);
      setTaskCurrent("")
      
     }
  
     function handleEditTask(){

      if(isModalVisible === true){
        setIsModalVisible(false)
      }
      else{
        setIsModalVisible(true)
      }
     }
  
     function handleRemoveTask(id) {
        
      const tasklist = listTask.filter((task) => task.id !== id)
  
      setListTask(tasklist)
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
      <div className="container-add-task">
          <ul className="container-add-task">
            { listTask.map((task) => (
                <li key={task.id} className="card" >
                  <textarea disabled={isModalVisible}>{task.description}</textarea>
                  <div className="btns">
                    <button onClick={() => handleEditTask()} type="button">
                      <AiFillEdit size={16}/>
                    </button> 
                    <button onClick={() => handleRemoveTask(task.id)} type="button">
                      <FiTrash size={16}/>
                    </button> 
                  </div> 
                </li>
             ))}
          </ul>
      </div>
    </> 

    
    );

}





  
  export default InputCard;  