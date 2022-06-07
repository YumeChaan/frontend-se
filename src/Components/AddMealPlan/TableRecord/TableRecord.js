import React, { useState } from "react";

import MealPlanForm from "../MealPlanForm/MealPlanForm.js";

import styled from "./TableRecord.module.css";

function TableRecord(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  const MealPlan=()=>{
    if (props.status!=="pending"){
      return <a href={"https://fitness24x7.herokuapp.com"+props.meal_plan} target="_blank" className={styled["meal-plan"]}>Download</a>
    }else{
      return "Not added"
    }
  }

  return (
    <>
    
      {show && <MealPlanForm 
        id_={props.id_}
        name={props.name}
        date={props.date}
        current_weight={props.current_weight}
        target_weight={props.target_weight}
        other_comments={props.other_comments}
        status={props.status}
        veg_prefer={props.veg_prefer}
        gender={props.gender}
        target_time={props.target_time}
        meal_plan={props.meal_plan} 
        onClose={modalCloseHandler}/>}

      <div
        onClick={modalShowHandler}
        className={`${styled["table-record"]} ${props.className}`}
      >
        <div className={`row`}>
          <div className={`col-md-4 col-4 ${styled["data"]}`}>{props.name}</div>
          <div className={`col-md-2 col-4 ${styled["data"]}`}>
            {props.date}
          </div>
          <div className={`col-md-2 d-none d-md-block ${styled["data"]}`}>
            {props.veg_prefer}
          </div>
          <div className={`col-md-2 col-4 ${styled["data"]}`}>
            {props.status}
          </div>
          <div className={`col-md-2 d-none d-md-block ${styled["data"]}`}>
            {MealPlan()}
          </div>
        </div>
        
      </div>
    </>
  );
}

export default TableRecord;
