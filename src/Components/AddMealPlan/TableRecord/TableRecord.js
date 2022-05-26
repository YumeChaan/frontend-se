import React from 'react';

import MealPlanForm from '../MealPlanForm/MealPlanForm.js'

import styled from './TableRecord.module.css';

function TableRecord(props){

    const addMealPlanHandler = (mealPlan) => {
        // Need to check whether the meal plan already exists in the database
        // TODO: Fill fields with the data in the data base
        // If Not
        // TODO: Meal Plan Form
        console.log("Clicked");

    }


    return(
        <div onClick={() => {addMealPlanHandler(props.mealplan)}} className={`${styled["table-record"]} ${props.className}`}>
            <div className={styled['data']}>{props.name}</div>
            <div className={`${styled['data']} ${styled['small-data']}`}>{props.date}</div>
            <div className={`${styled['data']} ${styled['small-data']}`}>{props.current_weight}</div>
            <div className={`${styled['data']} ${styled['small-data']}`}>{props.target_weight}</div>
            <div className={`${styled['data']} ${styled['big-data']}`}>{props.other_comments}</div>
            <div className={`${styled['data']} ${styled['small-data']}`}>{props.status}</div> 
        </div>
    );
}

export default TableRecord