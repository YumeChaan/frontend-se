import React from "react";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";


import styled from "./PreMealPlanForm.module.css";

function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal(props) {

    function MealPlan(){
        if (props.status!=="pending"){
          return <a href={"https://fitness24x7.herokuapp.com"+props.meal_plan} target="_blank" className={styled["meal-plan"]}>Download</a>
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
                            <span>Meal Plan</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {MealPlan()}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Current Weight</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.current_weight} kg</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Target Weight</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.target_weight} kg</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Target Time Period</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.target_time} Months</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-md-3 col-5`}>
                            <span>Vegetarian / Non-Vegetarian?</span>
                        </div>
                        <div className={`col-md-9 col-7`}>
                            <span>: {props.veg_prefer}</span>
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

function PreMealPlanForm(props) {
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
        meal_plan={props.meal_plan}
        current_weight={props.current_weight}
        target_weight={props.target_weight}
        target_time={props.target_time}
        veg_prefer={props.veg_prefer}
        add_notes={props.add_notes} 
        message={"Hello world"} />,

        document.getElementById("modal-content")
      )}
    </React.Fragment>
  );
}

export default PreMealPlanForm;
