import '../global.css';

import { AiFillEdit } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { VscCheckAll } from 'react-icons/vsc';



export function CardTask({listTask, setListTask}) {
  
       function handleEditTask(id){
  
        const toggleVisible = listTask.map(task => task.id === id ? {
          ...task,
          visible: !task.visible
        }  : task ); 
  
        setListTask(toggleVisible)
       }
    
       function handleRemoveTask(id) {
          
        const tasklist = listTask.filter((task) => task.id !== id)
    
        setListTask(tasklist)
       }

       function handleCompleteTask(id){
           

           const completeTask = listTask.map(task => task.id === id ? {
            ...task,
            isComplete: true,
          }  : task ); 
    
          setListTask(completeTask)


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
                    <textarea disabled={task.visible}>{task.description}</textarea>
                    <div className="btns">
                    {task.isComplete 
                        ? null 
                        : <button onClick={() => handleCompleteTask(task.id)} type="button">
                            <VscCheckAll size={16}/>
                        </button>
                    }
                    <button onClick={() => handleEditTask(task.id)} type="button">
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