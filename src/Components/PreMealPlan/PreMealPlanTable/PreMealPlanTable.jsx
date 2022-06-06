import React, { useState } from "react";
import PreMealPlanForm from "../PreMealPlanForm/PreMealPlanForm.jsx"
import styled from "./PreMealPlanTable.module.css";



function PreMealRequestTable(props) {

  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  function MealPlan(){
    if (props.status!=="pending"){
      return <a href={"http://localhost:5000/"+props.meal_plan} target="_blank" className={styled["meal-plan"]}>Download</a>
    }else{
      return "Wait"
    }
  }

  return (
      <>
      {show && <PreMealPlanForm 
      key={props.id}
      date={props.date}
      status={props.status}
      meal_plan={props.meal_plan}
      current_weight={props.current_weight}
      target_weight={props.target_weight}
      target_time={props.target_time}
      veg_prefer={props.veg_prefer}
      add_notes={props.add_notes}  
      onClose={modalCloseHandler}/>}

      <div
        onClick={modalShowHandler}
        className={`${styled["table-record"]} ${props.className}`}
      >
        
        <div className={`row`}>
            <div className={`col-md-4 col-6 ${styled["data"]}`}>{props.date}</div>
            <div className={`col-md-4 d-none d-md-block ${styled["data"]}`}>{props.status}</div>
            <div className={`col-md-4 col-6 ${styled["data"]}`}> 
              {MealPlan()}
              
            </div>
        </div>
            
            
        </div>
      </>
  );
}

export default PreMealRequestTable;
