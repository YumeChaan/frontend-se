import React, { useState } from "react";

import WorkoutPlanForm from "../WorkoutPlanForm/WorkoutPlanForm.js";

import styled from "./TableRecord.module.css";

function TableRecord(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  return (
    <>
      {show && <WorkoutPlanForm id_={props.id_} onClose={modalCloseHandler}/>}

      <div
        onClick={modalShowHandler}
        className={`${styled["table-record"]} ${props.className}`}
      >
        <div className={`row`}>
        <div className={`col-3 ${styled["data"]}`}>{props.name}</div>
        <div className={`col-2 ${styled["data"]}`}>
          {props.date}
        </div>
        <div className={`col-1 ${styled["data"]} `}>
          {props.current_weight}
        </div>
        <div className={`col-1 ${styled["data"]} `}>
          {props.target_weight}
        </div>
        <div className={`col-3 ${styled["data"]} `}>
          {props.other_comments}
        </div>
        <div className={`col-2 ${styled["data"]} `}>
          {props.status}
        </div>
        </div>
      </div>
    </>
  );
}

export default TableRecord;