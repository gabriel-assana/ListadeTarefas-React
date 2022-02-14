import './Card.css';

import React from 'react';


function Card(props) {
    return (
      <ul className="div-task">
        <li className="card">{props.task}</li>
      </ul>
    );
  }
  
  export default Card;