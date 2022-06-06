import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Card, Form } from "react-bootstrap";

import TextField from "../../UI/TextField/TextField";
import Button from "../../UI/Button/Button.js"

import styled from "./MealPlanForm.module.css";
import {uploadMealPlan} from '../../../services/mealPlanService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal(props) {

  // const calorieIntakeRef = useRef();
  const [file, setFile] = useState(null);
  // console.log(props.id_)
  const formSubmitHandler =async (event) => {

    event.preventDefault();
  
    try {
     
      const response = await uploadMealPlan(file,props.id_);
      
      // Set to 3sec
      toast.success('Meal Plan Successfully send', {autoClose:3000})
      window.location = "/admin/add-meal-plan";
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
    setFile(event.target.files[0]);
  }

  const MealPlan=()=>{
    if (props.status!=="pending"){
      return <a href={"http://localhost:5000/"+props.meal_plan} target="_blank" className={styled["meal-plan"]}>Download</a>
    }else{
      return "Wait"
    }
  }

  return (
    <Card className={styled["modal"]}>
      <div className={styled["modal-header"]}>
        <h2>Meal Plan Forum</h2>
      </div>
      <Form className="modal-body" onSubmit={formSubmitHandler}>
            {/* <TextField fieldID={"daily-cal"} label={"Daily Calorie Intake"} refHandler={calorieIntakeRef}/> */}
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Name</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.name}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Date</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.date}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Status</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.status}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Meal Plan</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {MealPlan()}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Gender</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.gender}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Current Weight</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.current_weight}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Target Weight</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.target_weight}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Target Time Period</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.target_time}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Vegetarian / Non-Vegetarian?</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.veg_prefer}</span>
                </div>
            </div>
            <div className={`row form-group`}>
                <div className={`col-md-5 col-5`}>
                    <span>Comments</span>
                </div>
                <div className={`col-md-7 col-7`}>
                    <span>: {props.other_comments}</span>
                </div>
            </div>
            <section>
                <label className={styled['meal-plan-lbl']}>Meal Plan PDF</label> <br/>
                <input type="file" onChange={handleFile} className={styled['file-input']} id="meal-plan-upload" required></input>
            </section>

            <div className={styled["submit-section"]}>
              <Button className={"form-btn"} value={"Submit"}/>
            </div>
            
          
      </Form>
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
        <FormModal 
        id_={props.id_}
        name={props.name}
        date={props.date}
        current_weight={props.current_weight}
        target_weight={props.target_weight}
        other_comments={props.other_comments}
        status={props.status}
        veg_prefer={props.veg_prefer}
        gender={props.gender}
        target_time={props.target_time}
        meal_plan={props.meal_plan} 
        message={"Hello world"} />,
        document.getElementById("modal-content")
      )}
    </React.Fragment>
  );
}

export default MealPlanForm;
