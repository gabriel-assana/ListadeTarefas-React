import '../global.css';

import { AiFillEdit } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { VscCheckAll } from 'react-icons/vsc';



export function CardTask({listTask, setListTask}) {
  
       function handleEditTask(id , isComplete){
        
            if(!isComplete) {
                const toggleVisible = listTask.map(task => task.id === id ? {
                ...task,
                notVisible: !task.notVisible
                }  : task ); 
        
                setListTask(toggleVisible)
            }
       }
    
       function handleRemoveTask(id) {
          
        const tasklist = listTask.filter((task) => task.id !== id)
    
        setListTask(tasklist)
       }

       function handleCompleteTask(id, notVisible){
           
         if(notVisible){
           const completeTask = listTask.map(task => task.id === id ? {
            ...task,
            isComplete: true,
          }  : task ); 
    
          setListTask(completeTask)
         }

       }

    return(
        <div className="container-add-task">
            <ul className="container-add-task">
            { listTask.map((task) => (
                <li key={task.id} className="card" > 
                    { task.isComplete 
                        ? <span class="completed">Feito</span> 
                        : null
                    }            
                    <textarea disabled={task.notVisible}>{task.description}</textarea>
                    <div className="btns">
                    {task.isComplete 
                        ? null 
                        : <button onClick={() => handleCompleteTask(task.id, task.notVisible)} type="button">
                            <VscCheckAll size={16}/>
                        </button>
                    }
                    <button onClick={() => handleEditTask(task.id, task.isComplete)} type="button">
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
    )
}