import React from "react";
import PreWorkoutScheduleTable from '../../Components/PreWorkoutSchedule/PreWorkoutScheduleTable/PreWorkoutScheduleTable.jsx'
import styled from './index.module.css';

function RequestWorkoutSchedule() {
    const records = [
        {
            id: "ID",
            date: "Date",
            status: "Status",
            workout_schedule: "Workout Schedule",
            current_weight: "Current Weight",
            target_weight: "Target Weight",
            target_time: "Target Time Period",
            workout_frequency: "Workout Frequency",
            targets: "Targets",
            add_notes: "Additional Notes"

        },
        {
            id: 1,
            date: "2021-12-12",
            status: "Pending",
            workout_schedule: "Wait",
            current_weight: 55,
            target_weight: 48,
            target_time: 2,
            workout_frequency: "Once a week or never",
            targets: "Build muscle",
            add_notes: "Build muscle, Build muscle, Build muscle"
        },
        {
            id: "ID",
            date: "2022-12-12",
            status: "Success",
            workout_schedule: "Workout Schedule.pdf",
            current_weight: 60,
            target_weight: 55,
            target_time: 1,
            workout_frequency: "Twice a week",
            targets: "Lose weight",
            add_notes: "Additional Notes, Build muscle, Build muscle"
        },
    ];
    return (
        <React.Fragment>
            <div className={`container`}>
                <header className={styled['header']}>
                    <h1>Request Workout Schedule</h1>
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
                            <label for="target_time">Time Period to Achieve the Target (Months) </label>
                            <input type="number" className={`form-control`} id="target_time" name="target_time"/>
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="targets">Targets</label>
                            <select name="targets" id="targets" className={`form-control`}>
                                <option value="Build muscle">Build muscle</option>
                                <option value="Lose Weight">Lose Weight</option>
                                <option value="Get fit">Get fit</option>
                                <option value="Feel like an athlete">Feel like an athlete</option>
                            </select>
                        </div>
                    </div>
                    <div className={`form-group`}>
                        <label for="workout_frequency">How often do you exercise?</label>
                        <select name="workout_frequency" id="workout_frequency" className={`form-control`}>
                                <option value="Once a week or never">Once a week or never</option>
                                <option value="Twice a week">Twice a week</option>
                                <option value="Three times a week or more">Three times a week or more</option>
                        </select>
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
                        <PreWorkoutScheduleTable
                        key={record["id"]}
                        date={record["date"]}
                        status={record["status"]}
                        workout_schedule={record["workout_schedule"]}
                        current_weight={record["current_weight"]}
                        target_weight={record["target_weight"]}
                        target_time={record["target_time"]}
                        workout_frequency={record["workout_frequency"]}
                        targets={record["targets"]}
                        add_notes={record["add_notes"]}
                        />
                    );
                    })}
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default RequestWorkoutSchedule;