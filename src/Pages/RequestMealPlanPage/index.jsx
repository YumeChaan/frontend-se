import React from "react";
import PreMealPlanTable from '../../Components/PreMealPlan/PreMealPlanTable/PreMealPlanTable.jsx'
import styled from './index.module.css';

function RequestMealPlan() {
    const records = [
        {
            id: "ID",
            date: "Date",
            status: "Status",
            meal_plan: "Meal Plan",
            current_weight: "Current Weight",
            target_weight: "Target Weight",
            target_time: "Target Time Period",
            veg_prefer: "Vegetarian/ Non-Vegetarian",
            add_notes: "Additional Notes"

        },
        {
            id: 1,
            date: "2021-12-12",
            status: "Pending",
            meal_plan: "Wait",
            current_weight: 50,
            target_weight: 40,
            target_time: 3,
            veg_prefer: "Vegetarian",
            add_notes: "Additional Notes"
        },
        {
            id: "ID",
            date: "2022-12-12",
            status: "Success",
            meal_plan: "Meal Plan.pdf",
            current_weight: 78,
            target_weight: 56,
            target_time: 4,
            veg_prefer: "Non-Vegetarian",
            add_notes: "Additional Notes"
        },
    ];
    return (
        <React.Fragment>
            <div className={`container`}>
                <header className={styled['header']}>
                    <h1>Request Meal Plan</h1>
                </header>
                <div>
                <form>
                    <div className={`row`}>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="currentWeight">Current Weight (Kg) </label>
                            <input type="number" step="0.01" className={`form-control`} id="currentWeight" name="currentWeight"/>
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="targetWeight">Target Weight (Kg) </label>
                            <input type="number" step="0.01" className={`form-control`} id="targetWeight" name="targetWeight"/>
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="time-p">Time Period to Achieve the Target (Months) </label>
                            <input type="number" className={`form-control`} id="time-p" name="time-p"/>
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="veg-prefer">Vegetarian or Non-Vegetarian</label>
                            <select name="veg_prefer" id="veg-prefer" className={`form-control`}>
                                <option value="non-veg">Non-Vegetarian</option>
                                <option value="veg">Vegetarian</option>
                            </select>
                        </div>
                    </div>
                    <div className={`form-group`}>
                        <label for="add-notes">Additional Notes</label>
                        <textarea className={`form-control`} name="add-notes" id="add-notes" rows="3" ></textarea>
                    </div>

                    
                    <button className={` btn btn-primary btn-lg ${styled["btn-sub"]} `} type="submit">SUBMIT</button>
                    </form>
                </div>

                <div className={styled['table-holder']}>
                    {records.map((record) => {
                    return (
                        <PreMealPlanTable
                        key={record["id"]}
                        date={record["date"]}
                        status={record["status"]}
                        meal_plan={record["meal_plan"]}
                        current_weight={record["current_weight"]}
                        target_weight={record["target_weight"]}
                        target_time={record["target_time"]}
                        veg_prefer={record["veg_prefer"]}
                        add_notes={record["add_notes"]}
                        />
                    );
                    })}
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default RequestMealPlan;