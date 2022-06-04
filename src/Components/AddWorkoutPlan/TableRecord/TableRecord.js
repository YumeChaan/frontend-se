import React, { useState } from "react";

import WorkoutPlanForm from "../WorkoutPlanForm/WorkoutPlanForm.js";

import styled from "./TableRecord.module.css";

function TableRecord(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  return (
    <>
      {show && <WorkoutPlanForm onClose={modalCloseHandler}/>}

      <div
        onClick={modalShowHandler}
        className={`${styled["table-record"]} ${props.className}`}
      >
        <div className={styled["data"]}>{props.name}</div>
        <div className={`${styled["data"]} ${styled["small-data"]}`}>
          {props.date}
        </div>
        <div className={`${styled["data"]} ${styled["small-data"]}`}>
          {props.current_weight}
        </div>
        <div className={`${styled["data"]} ${styled["small-data"]}`}>
          {props.target_weight}
        </div>
        <div className={`${styled["data"]} ${styled["big-data"]}`}>
          {props.other_comments}
        </div>
        <div className={`${styled["data"]} ${styled["small-data"]}`}>
          {props.status}
        </div>
      </div>
    </>
  );
}

export default TableRecord;
