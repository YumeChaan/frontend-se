import React from "react";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";

import TextField from "../../UI/TextField/TextField";

import styled from "./MealPlanForm.module.css";

function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal(props) {
  return (
    <Card className={styled["modal"]}>
      <div className={styled["modal-header"]}>
        <h2>Meal Plan Forum</h2>
      </div>
      <div className="modal-body">
            <TextField fieldID={"daily-cal"} label={"Daily Calorie Intake"}/>

            <section>
                <h4 className={styled['sec-breakfast']}>Breakfast</h4>
            </section>
      </div>
    </Card>
  );
}

function MealPlanForm(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        document.getElementById("modal-overlay")
      )}

      {ReactDOM.createPortal(
        <FormModal message={"Hello world"} />,
        document.getElementById("modal-content")
      )}
    </React.Fragment>
  );
}

export default MealPlanForm;
