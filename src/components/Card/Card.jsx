import './Card.css';

import React from 'react';

function Card(props) {
    return (
      <ul className="div-task">
        <li className="card">
          <textarea disabled cols="30" rows="10">{props.task}</textarea>
        </li>
      </ul>
    );
   

  }
  
  export default Card;