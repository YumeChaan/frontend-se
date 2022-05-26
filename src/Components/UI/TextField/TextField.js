import React from "react";

import styled from './TextField.module.css';

function TextField(props) {
  return (
    <div>
      <label for={props.fieldID} className={styled['label']}>{props.label}</label>
      <input type={"text"} id={props.fieldID} className={styled['field']} value={props.value}></input>
    </div>
  );
}

export default TextField;
