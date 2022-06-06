import React, { useState } from "react";

import WorkoutPlanForm from "../WorkoutPlanForm/WorkoutPlanForm.js";

import styled from "./TableRecord.module.css";

function TableRecord(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  const WorkoutSchedule=()=>{
    if (props.status!=="pending"){
      return <a href={"http://localhost:5000"+props.workout_schedule} target="_blank" className={styled["meal-plan"]}>Download</a>
    }else{
      return "Not added"
    }
  }

  return (
    <>
      {show && <WorkoutPlanForm 
      id_={props.id_} 
      name={props.name}
      date={props.date}
      current_weight={props.current_weight}
      target_weight={props.target_weight}
      other_comments={props.other_comments}
      status={props.status}
      target_time={props.target_time}
      targets={props.targets}
      workout_frequency={props.workout_frequency}
      gender={props.gender}
      workout_schedule={props.workout_schedule}
      onClose={modalCloseHandler}/>}

      <div
        onClick={modalShowHandler}
        className={`${styled["table-record"]} ${props.className}`}
      >
        <div className={`row`}>
        <div className={`col-md-3 col-4 ${styled["data"]}`}>{props.name}</div>
        <div className={`col-md-3 col-4 ${styled["data"]}`}>
          {props.date}
        </div>
        <div className={`col-md-3 col-4 ${styled["data"]} `}>
          {props.status}
        </div>
        <div className={`col-md-3 d-none d-md-block ${styled["data"]} `}>
          {WorkoutSchedule()}
        </div>
        </div>
      </div>
    </>
  );
}

export default TableRecord;
