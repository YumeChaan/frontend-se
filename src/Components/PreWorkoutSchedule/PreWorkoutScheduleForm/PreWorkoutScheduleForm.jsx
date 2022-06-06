import React from "react";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";


import styled from "./PreWorkoutScheduleForm.module.css";

function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal(props) {

    function WorkoutSchedule(){
        if (props.status!=="pending"){
          return <a href={"http://localhost:5000/"+props.workout_schedule} target="_blank" className={styled["meal-plan"]}>Download</a>
        }else{
          return "Wait"
        }
      }

    return (
      
        <Card className={styled["modal"]}>
            <div className={styled["modal-header"]}>
                {/* <h2>{props.name}</h2> */}
            </div>
            <div className="modal-body">
                <form action="">
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Date</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.date}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Status</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.status}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Workout Schedule</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {WorkoutSchedule()}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Current Weight</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.current_weight}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Target Weight</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.target_weight}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Target Time Period</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.target_time}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Workout Frequency</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.workout_frequency}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Targets</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.targets}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Additional Notes</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.add_notes}</span>
                        </div>
                    </div>

                </form>
                
            </div>
        </Card>
      
    
  );
}

function PreWorkoutScheduleForm(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        document.getElementById("modal-overlay")
      )}

      {ReactDOM.createPortal(
        <FormModal 
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
        message={"Hello world"} />,

        document.getElementById("modal-content")
      )}
    </React.Fragment>
  );
}

export default PreWorkoutScheduleForm;
