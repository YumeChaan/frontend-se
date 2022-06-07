import React, { useState } from "react";

import PreWorkoutScheduleForm from "../PreWorkoutScheduleForm/PreWorkoutScheduleForm.jsx";

import styled from "./PreWorkoutScheduleTable.module.css";

function PreWorkoutScheduleTable(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  function WorkoutSchedule(){
    if (props.status!=="pending"){
      return <a href={"https://fitness24x7.herokuapp.com"+props.workout_schedule} target="_blank" className={styled["meal-plan"]}>Download</a>
    }else{
      return "Wait"
    }
  }

  return (
    <>
      {show && <PreWorkoutScheduleForm 
      key={props.key}
      date={props.date}
      status={props.status}
      workout_schedule={props.workout_schedule}
      current_weight={props.current_weight}
      target_weight={props.target_weight}
      target_time={props.target_time}
      workout_frequency={props.workout_frequency}
      targets={props.targets}
      add_notes={props.add_notes}  
      onClose={modalCloseHandler}/>}

      <div
        onClick={modalShowHandler}
        className={`${styled["table-record"]} ${props.className}`}
      >
        <div className={`row`}>
            <div className={`col-md-4 col-6 ${styled["data"]}`}>{props.date}</div>
            <div className={`col-md-4 d-none d-md-block ${styled["data"]}`}>{props.status}</div>
            <div className={`col-md-4 col-6 ${styled["data"]}`}>{WorkoutSchedule()}</div>
        </div>
        
        
      </div>
    </>
  );
}

export default PreWorkoutScheduleTable;
