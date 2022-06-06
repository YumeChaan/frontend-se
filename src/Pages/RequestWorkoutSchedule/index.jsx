import React, {useState,useEffect} from "react";
import Joi from "joi-browser";
import PreWorkoutScheduleTable from '../../Components/PreWorkoutSchedule/PreWorkoutScheduleTable/PreWorkoutScheduleTable.jsx'
import styled from './index.module.css';
import Box from '@mui/material/Box';
import MemberSideNavBar from "../../Components/MemberSideNavBar";
import MemberBackgroundImage from "../../Resources/Images/member-background.jpg";
import {requestWorkOutPlan} from "../../services/userServices"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getWorkoutPlan} from "../../services/userServices";


const drawerWidth = 240;

function RequestWorkoutSchedule() {
  

    const [records, setRecords] = useState([]);
    const [workout_frequency, setWorkout_frequency] = useState('Once a week or never');
    const [targets, setTargets] = useState('Build muscle');
    const [add_notes, setAdd_notes] = useState('');

    const [workoutSchedule, setWorkoutSchedule] = useState({
        current_weight: "",
        target_weight:"",
        target_time:"",
        
    })
    useEffect(() => {
        async function getWorkoutPlans() {
          const result = await getWorkoutPlan();
          setRecords(result.data);
        
        }
    
        getWorkoutPlans();
      },[]);
    const [errors, setErrors] = useState({});
    const schema = {
        current_weight:Joi.number().required(),
        target_weight:Joi.number().required(),
        target_time:Joi.number().required(),
    }

    const validateForm = (event) => {
        event.preventDefault();
        const result = Joi.validate(workoutSchedule,
          schema, { abortEarly: false });
        console.log(result);
        const { error } = result;
        if (!error) {
        return null;
        } else {
        const errorData = {};
        for (let item of error.details) {
          const name = item.path[0];
          const message = item.message;
          errorData[name] = message;
        }
        console.log(errors);
        setErrors(errorData);
        return errorData;
        }
    };
  
    const handleSave = (event) => {
        const { name, value } = event.target;
        let errorData = { ...errors };
        const errorMessage = validateProperty(event);
        if (errorMessage) {
        errorData[name] = errorMessage;
        } else {
        delete errorData[name];
        }
        let workoutScheduleData = { ...workoutSchedule };
        workoutScheduleData[name] = value;
        // setVeg_prefer(veg_prefer);
        setWorkoutSchedule(workoutScheduleData);
        setErrors(errorData);
    };

    const handleWorkoutFreqChange =(e)=>{
        setWorkout_frequency(e.target.value);
        console.log(workout_frequency)
    }

    const handleTargetsChange =(e)=>{
        setTargets(e.target.value);
    }

    const handleAddNotesChange =(e)=>{
        setAdd_notes(e.target.value);
    }


    const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
    };


    const handleSubmit= async(e)=>{
        console.log(targets)
        e.preventDefault();
        const result = Joi.validate(workoutSchedule,
          schema, { abortEarly: false });
        console.log(result);
        const { error } = result;
        if (!error) {
            try {
                
               
                const { target_time,target_weight,current_weight} =workoutSchedule;
               
                const response = await requestWorkOutPlan(target_time,target_weight,current_weight,add_notes,workout_frequency,targets);
    
                // Set to 3sec
                toast.success('successful', {autoClose:3000})
                window.location = "/member/request-workout-schedule";
              } catch (ex) {
                if (ex.response && ex.response.status === 400) {
                     // Set to 10sec
                     toast.error(ex.response.data, {
                        // Set to 15sec
                        autoClose:5000});
                       
                }
              }
        return null;
        } else {
        const errorData = {};
        for (let item of error.details) {
          const name = item.path[0];
          const message = item.message;
          errorData[name] = message;
        }
        console.log(errors);
        setErrors(errorData);
        return errorData;
        }
   
    };

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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `url(${MemberBackgroundImage})` }}
            >
                
                <div className={styled['main-container']}>
            <div className={`container`}>
                <header className={styled['header']}>
                    <h1>Request Workout Schedule</h1>
                </header>
                <div>
                <form onSubmit={(e) => {handleSubmit(e)}} action="" method="POST">
                    <div className={`row`}>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="currentWeight">Current Weight (Kg) </label>
                            <input type="number" step="0.01" className={`form-control`} id="currentWeight" name="current_weight" value={workoutSchedule.current_weight} required onChange={handleSave}/>
                            {errors.current_weight && (
                            <div className={`alert alert-danger ${styled["error"]}`}>
                                Invalid Weight 
                            </div>)}
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="targetWeight">Target Weight (Kg) </label>
                            <input type="number" step="0.01" className={`form-control`} id="targetWeight" name="target_weight" value={workoutSchedule.target_weight} required onChange={handleSave}/>
                            {errors.target_weight && (
                            <div className={`alert alert-danger ${styled["error"]}`}>
                                Invalid Weight 
                            </div>)}
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="target_time">Time Period to Achieve the Target (Months) </label>
                            <input type="number" className={`form-control`} id="target_time" name="target_time" value={workoutSchedule.target_time} required onChange={handleSave}/>
                            {errors.target_time && (
                            <div className={`alert alert-danger ${styled["error"]}`}>
                                Invalid Number of Months 
                            </div>)}
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label for="targets">Targets</label>
                            <select name="targets" id="targets" className={`form-control`} value={targets} onChange={(e) => {handleTargetsChange(e)}}>
                                <option value="Build muscle">Build muscle</option>
                                <option value="Lose Weight">Lose Weight</option>
                                <option value="Get fit">Get fit</option>
                                <option value="Feel like an athlete">Feel like an athlete</option>
                            </select>
                        </div>
                    </div>
                    <div className={`form-group`}>
                        <label for="workout_frequency">How often do you exercise?</label>
                        <select name="workout_frequency" id="workout_frequency" className={`form-control`}  onChange={(e) => {handleWorkoutFreqChange(e)}}>
                                <option value="Once a week or never">Once a week or never</option>
                                <option value="Twice a week">Twice a week</option>
                                <option value="Three times a week or more">Three times a week or more</option>
                        </select>
                    </div>

                    <div className={`form-group`}>
                        <label for="add-notes">Additional Notes</label>
                        <textarea className={`form-control`} name="add_notes" id="add-notes" rows="3" value={add_notes} onChange={(e) => {handleAddNotesChange(e)}}></textarea>
                    </div>

                    
                    <button className={` btn btn-primary btn-lg  ${styled["btn-sub"]} `}   type="submit">SUBMIT</button>
                    </form>
                </div>

                <div className={styled['table-holder']}>
                <div className={`${styled["table-record"]}`}>
                    <div className={`row`}>
                        <div className={`col-md-4 col-6 ${styled["data"]}`}>Date</div>
                        <div className={`col-md-4 d-none d-md-block ${styled["data"]}`}>Status</div>
                        <div className={`col-md-4 col-6 ${styled["data"]}`}>Workout Shedule</div>
                    </div>
                    </div>
                    {records.map((record) => {
                    return (
                        <PreWorkoutScheduleTable
                        key={record["id"]}
                        date={record["date"].slice(0,10)}
                        status={record["status"]}
                        workout_schedule={record["workoutPlan"]}
                        current_weight={record["current_weight"]}
                        target_weight={record["target_weight"]}
                        target_time={record["target_time"]}
                        workout_frequency={record["workout_frequency"]}
                        targets={record["targets"]}
                        add_notes={record["note"]}
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

export default RequestWorkoutSchedule;