import React, {useState} from "react";
import styles from './index.module.css';
import {addAdmin} from '../../services/adminServices';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddAdmin(){
    const [name , setName] = useState('');
    const [birthday , setbirthday] = useState('');
    const [address , setAddress] = useState('');
    const [phone , setPhone] = useState('');
    const [email , setEmail] = useState('');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
    const [gender , setGender] = useState('');
    // function to update state of name with
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }

    const handGenderChange =(e)=>{
      setGender(e.target.value);
      
    }
    // function to update state of birthday with value
    // enter by user in form
    const handlebirthdayChange =(e)=>{
      setbirthday(e.target.value);
    }
    const handleAddressChange =(e)=>{
        setAddress(e.target.value);
      }
    const handlePhoneChange =(e)=>{
        setPhone(e.target.value);
      }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handleUsernameChange =(e)=>{
        setUsername(e.target.value);
      }
      // function to update state of password with
      // value enter by user in form
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
      // function to update state of confirm password
      // with value enter by user in form
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
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
      
     
 
    }
    return(
        
        <div className={`container ${styles["reg-container"]}`}>
            <div className={`${styles["s-container"]} `}>
                <form action="" className={` ${styles["reg-form"]}`} onSubmit={(e) => {handleSubmit(e)}}>
                <h1 className={`text-center py-3 ${styles["title"]}`}>Add Admin</h1>     
                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="name" className={`col-3 ${styles["ti-label"]}`}>Name</label>

                        <input type="text" class={`form-control col-9 ${styles["ti-input"]}`} id="name" value={name} required onChange={(e) => {handleChange(e)}} />
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="birthday" className={`col-3 ${styles["ti-label"]}`}>Birthday</label>

                        <input type="date" class={`form-control col-9 ${styles["ti-input"]}`} id="birthday" value={birthday} required onChange={(e) => {handlebirthdayChange(e)}} />
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="address" className={`col-3 ${styles["ti-label"]}`}>Address</label>

                        <input type="text" class={`form-control col-9 ${styles["ti-input"]}`} id="address" value={address} required onChange={(e) => {handleAddressChange(e)}} />
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="phone" className={`col-3 ${styles["ti-label"]}`}>Phone Number</label>

                        <input type="text" class={`form-control col-9 ${styles["ti-input"]}`} id="phone" value={phone} required onChange={(e) => {handlePhoneChange(e)}} />
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="email" className={`col-3 ${styles["ti-label"]}`}>Email</label>

                        <input type="email" class={`form-control col-9 ${styles["ti-input"]}`} id="email" value={email} required onChange={(e) => {handleEmailChange(e)}} />
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="gender" className={`col-3 ${styles["ti-label"]}`}>Gender</label>
                        <div className={`col-9 ${styles["gender-col"]}`}>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" onChange={(e) => {handGenderChange(e)}}    id="maleGender" value="male" />
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

                        <input type="text" class={`form-control col-9 ${styles["ti-input"]}`} id="username" value={username} required onChange={(e) => {handleUsernameChange(e)}} />
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="password" className={`col-3 ${styles["ti-label"]}`}>Password</label>

                        <input type="password" class={`form-control col-9 ${styles["ti-input"]}`} id="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} />
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="confPassword" className={`col-3 ${styles["ti-label"]}`}>Confirm Password</label>

                        <input type="password" class={`form-control col-9 ${styles["ti-input"]}`} id="confpassword" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}} />
                    </div>
                            
                    <button className={` btn btn-primary btn-lg ${styles["btn-sub"]} `} type="submit">SUBMIT</button>    
                            
                </form>
            </div>

        </div>
    );
}
export default AddAdmin;