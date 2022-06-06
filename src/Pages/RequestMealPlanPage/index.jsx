import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Joi from "joi-browser";
import PreMealPlanTable from '../../Components/PreMealPlan/PreMealPlanTable/PreMealPlanTable.jsx'
import styled from './index.module.css';
import Box from '@mui/material/Box';
import MemberSideNavBar from "../../Components/MemberSideNavBar";
import MemberBackgroundImage from "../../Resources/Images/member-background.jpg";
import {requestMealPlan} from "../../services/userServices"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getMealPlan} from "../../services/userServices"
import Moment from 'moment';
const drawerWidth = 240;


function RequestMealPlan() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        async function getMealPlans() {
          const result = await getMealPlan();
          setRecords(result.data);
        //   console.log(records)
        }
    
        getMealPlans();
      },[]);
    const [veg_prefer, setVeg_prefer] = useState("non-veg");
    const [add_notes, setAdd_notes] = useState("");

    const [mealPlan, setMealPlan] = useState({
        current_weight: "",
        target_weight:"",
        target_time:"",
        // veg_prefer:"Non-vegetarian",
        // add_notes:""
    })

    const [errors, setErrors] = useState({});
    
    const schema = {
        current_weight:Joi.number().required(),
        target_weight:Joi.number().required(),
        target_time:Joi.number().required(),
    }

    const validateForm = (event) => {
        event.preventDefault();
        const result = Joi.validate(mealPlan,
          schema, { abortEarly: false });
        // console.log(result);
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
        let mealPlanData = { ...mealPlan };
        mealPlanData[name] = value;
        // setVeg_prefer(veg_prefer);
        setMealPlan(mealPlanData);
        setErrors(errorData);
    };

    const handleVegPreferChange =(e)=>{
        setVeg_prefer(e.target.value);
    };

    const handleAddNotesChange =(e)=>{
        setAdd_notes(e.target.value);
    };

    const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
    };

    const handleSubmit= async(e)=>{
       
        e.preventDefault();
        const result = Joi.validate(mealPlan,
          schema, { abortEarly: false });
          
        const { error } = result;
        if (!error) {
            try {
                
               
                const { target_time,target_weight,current_weight} =mealPlan;
               
                const response = await requestMealPlan(target_time,target_weight,current_weight,add_notes,veg_prefer);
    
                // Set to 3sec
                toast.success('successful', {autoClose:3000})
                window.location = "/member/request-meal-plan";
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
                    <h1>Request Meal Plan</h1>
                </header>
                <div>
                <form onSubmit={(e) => {handleSubmit(e)}} action="" method="POST">
                    <div className={`row`}>
                        <div className={`form-group col-md-6 col-12`}>
                            <label  htmlFor="currentWeight">Current Weight (Kg) </label>
                            <input type="number" step="0.01" className={`form-control`} id="currentWeight" name="current_weight" value={mealPlan.current_weight} required onChange={handleSave}/>
                            {errors.current_weight && (
                            <div className={`alert alert-danger ${styled["error"]}`}>
                                Invalid Weight 
                            </div>)}
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label  htmlFor="targetWeight">Target Weight (Kg) </label>
                            <input type="number" step="0.01" className={`form-control`} id="targetWeight" name="target_weight" value={mealPlan.target_weight} required onChange={handleSave}/>
                            {errors.target_weight && (
                            <div className={`alert alert-danger ${styled["error"]}`}>
                                Invalid Weight 
                            </div>)}
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className={`form-group col-md-6 col-12`}>
                            <label  htmlFor="time-p">Time Period to Achieve the Target (Months) </label>
                            <input type="number" className={`form-control`} id="target_time" name="target_time" value={mealPlan.target_time} required onChange={handleSave}/>
                            {errors.target_time && (
                            <div className={`alert alert-danger ${styled["error"]}`}>
                                Invalid Number of Months 
                            </div>)}
                        </div>
                        <div className={`form-group col-md-6 col-12`}>
                            <label  htmlFor="veg-prefer">Vegetarian or Non-Vegetarian</label>
                            <select name="veg_prefer" id="veg-prefer" className={`form-control`} value={veg_prefer} onChange={(e) => {handleVegPreferChange(e)}}>
                                <option name="non-veg" value="non-veg">Non-Vegetarian</option>
                                <option name="veg" value="veg">Vegetarian</option>
                            </select>
                        </div>
                    </div>
                    <div className={`form-group`}>
                        <label  htmlFor="add-notes">Additional Notes</label>
                        <textarea className={`form-control`} name="add_notes" id="add-notes" rows="3" value={add_notes} onChange={(e) => {handleAddNotesChange(e)}}></textarea>
                    </div>

                    {/* {console.log(mealPlan.current_weight, mealPlan.target_weight, mealPlan.target_time, veg_prefer, add_notes)} */}
                    
                    <button className={` btn btn-primary btn-lg ${styled["btn-sub"]} `}  type="submit">SUBMIT</button>
                    </form>
                </div>

                <div className={styled['table-holder']}>
                    <div className={`${styled["table-record"]}`}>
                    <div className={`row`}>
                        <div className={`col-md-4 col-6 ${styled["data"]}`}>Date</div>
                        <div className={`col-md-4 d-none d-md-block ${styled["data"]}`}>Status</div>
                        <div className={`col-md-4 col-6 ${styled["data"]}`}>Meal Plan</div>
                    </div>
                    </div>

                    
                    {records.map((record) => {
                    return (
                        <PreMealPlanTable
                        key={record["id"]}
                        date={record['req_date'].slice(0,10)}
                        status={record["status"]}
                        meal_plan={record["mealPlan"]}
                        current_weight={record["current_weight"]}
                        target_weight={record["target_weight"]}
                        target_time={record["target_time"]}
                        veg_prefer={record["veg_prefer"]}
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

export default RequestMealPlan;