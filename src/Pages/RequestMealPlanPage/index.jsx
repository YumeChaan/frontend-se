import React, {useState} from "react";
import PreMealPlanTable from '../../Components/PreMealPlan/PreMealPlanTable/PreMealPlanTable.jsx'
import styled from './index.module.css';
import Box from '@mui/material/Box';
import MemberSideNavBar from "../../Components/MemberSideNavBar";
import adminBackgroundImage from "../../Resources/Images/member-background.jpg";

const drawerWidth = 240;


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

    const [current_weight, setCurrent_weight] = useState('');
    const [target_weight, setTarget_weight] = useState('');
    const [target_time, setTarget_time] = useState('');
    const [veg_prefer, setVeg_prefer] = useState('Non-vegetarian');
    const [add_nots, setAdd_notes] = useState('');

    const handleCWeightChange =(e)=>{
        setCurrent_weight(e.target.value);
    }

    const handleTWeightChange =(e)=>{
        setTarget_weight(e.target.value);
    }

    const handleTargetTimeChange =(e)=>{
        setTarget_time(e.target.value);
    }

    const handleVegPreferChange =(e)=>{
        setVeg_prefer(e.target.value);
    }

    const handleAddNotesChange =(e)=>{
        setAdd_notes(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
   
    }

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
            
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
                aria-label="mailbox folders"
                
            >
                
                <MemberSideNavBar/>
                
            </Box>
            
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `url(${adminBackgroundImage})` }}
            >
                
                <div className={styled['main-container']}>
            <div className={`container`}>
                <header className={styled['header']}>
                    <h1>Request Meal Plan</h1>
                </header>
                <div>
                <form onSubmit={(e) => {handleSubmit(e)}} action="" method="POST">
                    <div className={`row`}>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="currentWeight">Current Weight (Kg) </label>
                            <input type="number" step="0.01" className={`form-control`} id="currentWeight" name="currentWeight" value={current_weight} required onChange={(e) => {handleCWeightChange(e)}}/>
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="targetWeight">Target Weight (Kg) </label>
                            <input type="number" step="0.01" className={`form-control`} id="targetWeight" name="targetWeight" value={target_weight} required onChange={(e) => {handleTWeightChange(e)}}/>
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="time-p">Time Period to Achieve the Target (Months) </label>
                            <input type="number" className={`form-control`} id="target_time" name="target_time" value={target_time} required onChange={(e) => {handleTargetTimeChange(e)}}/>
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="veg-prefer">Vegetarian or Non-Vegetarian</label>
                            <select name="veg_prefer" id="veg-prefer" className={`form-control`} value={veg_prefer} onChange={(e) => {handleVegPreferChange(e)}}>
                                <option value="non-veg">Non-Vegetarian</option>
                                <option value="veg">Vegetarian</option>
                            </select>
                        </div>
                    </div>
                    <div className={`form-group`}>
                        <label for="add-notes">Additional Notes</label>
                        <textarea className={`form-control`} name="add-notes" id="add-notes" rows="3" value={add_nots} onChange={(e) => {handleAddNotesChange(e)}}></textarea>
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
            </div>
                
            </Box>
        </Box>
            
        </React.Fragment>
    );
}

export default RequestMealPlan;