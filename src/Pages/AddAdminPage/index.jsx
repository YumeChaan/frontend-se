import React, {useState} from "react";
import Joi from "joi-browser";
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import styles from './index.module.css';
import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";
import {addAdmin} from '../../services/adminServices';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// function AddAdmin(){
//     const [name , setName] = useState('');
//     const [birthday , setbirthday] = useState('');
//     const [address , setAddress] = useState('');
//     const [phone , setPhone] = useState('');
//     const [email , setEmail] = useState('');
//     const [username , setUsername] = useState('');
//     const [password , setPassword] = useState('');
//     const [confPassword , setConfPassword] = useState('');
//     const [gender , setGender] = useState('');
//     // function to update state of name with
//     // value enter by user in form
//     const handleChange =(e)=>{
//       setName(e.target.value);
//     }

//     const handGenderChange =(e)=>{
//       setGender(e.target.value);
      
//     }
//     // function to update state of birthday with value
//     // enter by user in form
//     const handlebirthdayChange =(e)=>{
//       setbirthday(e.target.value);
//     }
//     const handleAddressChange =(e)=>{
//         setAddress(e.target.value);






const drawerWidth = 240;

function AddAdmin(){

    const [admin, setAdmin] = useState({
      name: "",
      birthday: "",
      address: "",
      phone: "",
      email: "",
      username:"",
      password:"",
      confPassword:""
    });

    const [errors, setErrors] = useState({});
    const schema = {
      name: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
      birthday: Joi.date().iso().required(),
      address: Joi.string().required(),
      // phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
      phone: Joi.string().length(10).regex(/^[0-9]+$/, 'given').required(),
      email: Joi.string().email().required(),
      username: Joi.string().min(1).max(20).required(),
      password: Joi.string()
      .min(8)
      .max(25)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      'password').required(),
      // confPassword: Joi.string().required().valid(Joi.ref('password'))
      confPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
    };

    const validateForm = (event) => {
      event.preventDefault();
      const result = Joi.validate(admin,
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
      let adminData = { ...admin };
      adminData[name] = value;
      setAdmin(adminData);
      setErrors(errorData);
    };

    const validateProperty = (event) => {
      const { name, value } = event.target;
      const obj = { [name]: value };
      const subSchema = { [name]: schema[name] };
      const result = Joi.validate(obj, subSchema);
      const { error } = result;
      return error ? error.details[0].message : null;
    };
    
      // function to update state of confirm password
      // with value enter by user in form
    // below function will be called when user
    // click on submit button .
    const handleSubmit= async (e)=>{
      e.preventDefault();
      try {  
        
        await addAdmin(name,birthday,address,phone,email,gender,username,password,confPassword);
        // Set to 3sec
        toast.success('successful', {autoClose:3000})
        // window.location = "/admin/dashboard";
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
             // Set to 10sec
             toast.error(ex.response.data, {
                // Set to 15sec
                autoClose:5000});
                
        }
      }
      
     
 
    
    return(
      <React.Fragment>
            <Box sx={{ display: 'flex' }}>
            
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
                aria-label="mailbox folders"
                
            >
                
                <AdminSideNavBar/>
                
            </Box>
            
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `url(${adminBackgroundImage})` }}
            >
                
                <div className={`container ${styles["reg-container"]}`}>
            <div className={`${styles["s-container"]} `}>
                <form action="" className={` ${styles["reg-form"]}`}>
                <h1 className={`text-center py-3 ${styles["title"]}`}>Add Admin</h1>     
                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="name" className={`col-3 ${styles["ti-label"]}`}>Name</label>
                        <div className={`col-9 ${styles["wrap-input"]}`}>
                          <input type="text" className={`form-control ${styles["ti-input"]}`} id="name" name="name" value={admin.name} required onChange={handleSave} />
                          {errors.name && (
                          <div className={`alert alert-danger ${styles["error"]}`}>
                            Invalid Name
                          </div>)}
                        </div>
                        
                    </div>
                    

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="birthday" className={`col-3 ${styles["ti-label"]}`}>Birthday</label>
                          <div className={`col-9 ${styles["wrap-input"]}`}>
                            <input type="date" class={`form-control ${styles["ti-input"]}`} id="birthday" name="birthday" value={admin.birthday} required onChange={handleSave} />
                            {errors.birthday && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Invalid Birthday
                            </div>)}
                          </div>
                        
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="address" className={`col-3 ${styles["ti-label"]}`}>Address</label>
                        <div className={`col-9 ${styles["wrap-input"]}`}>
                          <input type="text" class={`form-control ${styles["ti-input"]}`} id="address" name="address" value={admin.address} required onChange={handleSave} />
                          {errors.address && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Invalid Address
                            </div>)}
                        </div>
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="phone" className={`col-3 ${styles["ti-label"]}`}>Phone Number</label>
                        <div className={`col-9 ${styles["wrap-input"]}`}>
                          <input type="text" class={`form-control ${styles["ti-input"]}`} id="phone" name="phone" value={admin.phone} required onChange={handleSave} />
                          {errors.phone && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Invalid Phone Number
                            </div>)}
                        </div>
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="email" className={`col-3 ${styles["ti-label"]}`}>Email</label>
                        <div className={`col-9 ${styles["wrap-input"]}`}>
                          <input type="email" class={`form-control ${styles["ti-input"]}`} id="email" name="email" value={admin.email} required onChange={handleSave} />
                          {errors.email && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Invalid Email
                            </div>)}
                        </div>
                        
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="gender" className={`col-3 ${styles["ti-label"]}`}>Gender</label>
                        <div className={`col-9 ${styles["gender-col"]}`}>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" onChange={(e) => {handGenderChange(e)}}    id="maleGender" value="male" defaultChecked/>
                                    Male
                                </label>
                                </div>
                                <div class="form-check-inline">
                                <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" onChange={(e) => {handGenderChange(e)}}    id="femaleGender" value="female" />Female
                                </label>
                                </div>
                                
                            </div>
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="username" className={`col-3 ${styles["ti-label"]}`}>User Name</label>
                        <div className={`col-9 ${styles["wrap-input"]}`}>
                          <input type="text" class={`form-control ${styles["ti-input"]}`} id="username" name="username" value={admin.username} required onChange={handleSave} />
                          {errors.username && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Username must be filled and less than 20 characters
                            </div>)}
                        </div>
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="password" className={`col-3 ${styles["ti-label"]}`}>Password</label>
                        <div className={`col-9 ${styles["wrap-input"]}`}>                             
                          <input type="password" class={`form-control ${styles["ti-input"]}`} id="password" name="password"  value={admin.password} required onChange={handleSave} />
                          {errors.password && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Password must be at least 8 characters long contain a number, an uppercase letter, a lowercase letter and a special character 
                            </div>)}
                        </div>
                        
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="confPassword" className={`col-3 ${styles["ti-label"]}`}>Confirm Password</label>
                        <div className={`col-9 ${styles["wrap-input"]}`}>
                          <input type="password" class={`form-control ${styles["ti-input"]}`} id="confPassword" name="confPassword" value={admin.confPassword} required onChange={handleSave} />
                          {errors.confPassword && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              {"Passwords do not match"}
                            </div>)}
                        </div>
                    </div>
                                               
                    <button className={` btn btn-primary btn-lg ${styles["btn-sub"]} `} onClick={validateForm} type="submit">SUBMIT</button>    
                            
                </form>
            </div>

        </div>
                
            </Box>
        </Box>
            
        </React.Fragment>
        
        
    );
}}
export default AddAdmin;