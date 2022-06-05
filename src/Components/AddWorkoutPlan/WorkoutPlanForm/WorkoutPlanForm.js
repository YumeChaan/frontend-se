import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Card, Form } from "react-bootstrap";

import TextField from "../../UI/TextField/TextField";
import Button from "../../UI/Button/Button.js"

import styled from "./WorkoutPlanForm.module.css";

function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal() {

  // const calorieIntakeRef = useRef();
  const [file, setFile] = useState(null);

  const formSubmitHandler = () => {
 
    // const calorie_intake = calorieIntakeRef.current.value;
    const meal_plan = file

    // console.log(calorie_intake);
    console.log(meal_plan);
  }

  const handleFile = (event) => {
    setFile(event.target.files[0])
  }

  return (
    <Card className={styled["modal"]}>
      <div className={styled["modal-header"]}>
        <h2>Workout Plan Forum</h2>
      </div>
      <Form className="modal-body" onSubmit={formSubmitHandler}>
            <section>
                <label className={styled['meal-plan-lbl']}>Workout Plan PDF</label> <br/>
                <input type="file" onChange={handleFile} className={styled['file-input']} id="meal-plan-upload"></input>
            </section>

            <div className={styled["submit-section"]}>
              <Button className={"form-btn"} value={"Submit"}/>
            </div>
            
          
      </Form>
    </Card>
  );
}

function WorkoutPlanForm(props) {
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

export default WorkoutPlanForm;
