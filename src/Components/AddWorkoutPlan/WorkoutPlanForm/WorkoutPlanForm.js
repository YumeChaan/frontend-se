import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Card, Form } from "react-bootstrap";

import TextField from "../../UI/TextField/TextField";
import Button from "../../UI/Button/Button.js"

import styled from "./WorkoutPlanForm.module.css";
import {uploadWorkOutPlan} from '../../../services/workOutPlanService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal(props) {

  // const calorieIntakeRef = useRef();
  const [file, setFile] = useState(null);

  const formSubmitHandler = async(event) => {
 
    event.preventDefault();
  
    try {
     
      const response = await uploadWorkOutPlan(file,props.id_);
      
      // Set to 3sec
      toast.success('Workout Plan Successfully sent', {autoClose:3000})
      window.location = "";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
           // Set to 10sec
           toast.error(ex.response.data, {
              // Set to 15sec
              autoClose:5000});
            
      }
    }
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
                <input type="file" onChange={handleFile} className={styled['file-input']} id="meal-plan-upload" required></input>
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
        <FormModal id_={props.id_} message={"Hello world"} />,
        document.getElementById("modal-content")
      )}
    </React.Fragment>
  );
}

export default WorkoutPlanForm;