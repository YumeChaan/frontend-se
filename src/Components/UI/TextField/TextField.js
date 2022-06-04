import React from "react";

import styled from './TextField.module.css';

function TextField(props) {
  return (
    <div>
      <label className={styled['label']}>{props.label}</label>
      <input type={"text"} id={props.fieldID} className={styled['field']} value={props.value} ref={props.refHandler}></input>
    </div>
  );
}

export default TextField;
