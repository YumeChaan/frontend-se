import React, {useState} from "react";
import styles from './index.module.css';



function AddAdmin(){
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [address , setAddress] = useState('');
    const [phone , setPhone] = useState('');
    const [email , setEmail] = useState('');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
 
    // function to update state of name with
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    // function to update state of age with value
    // enter by user in form
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
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
    const handleSubmit=(e)=>{
      if(password!==confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user
        // 'name' and 'email' details .
        alert('Successfully registered!');
      }
      e.preventDefault();
 
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
                        <label htmlFor="age" className={`col-3 ${styles["ti-label"]}`}>Age</label>

                        <input type="number" class={`form-control col-9 ${styles["ti-input"]}`} id="age" value={age} required onChange={(e) => {handleAgeChange(e)}} />
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
                                    <input type="radio" class="form-check-input" name="gender" id="male" value="male" />Male
                                </label>
                                </div>
                                <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="gender" id="female" value="female" />Female
                                </label>
                                </div>
                                <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" class="form-check-input" name="gender" id="other" value="other" />Other
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

                        <input type="password" class={`form-control col-9 ${styles["ti-input"]}`} id="email" value={password} required onChange={(e) => {handlePasswordChange(e)}} />
                    </div>

                    <div className={`form-group row ${styles["group"]}`}>
                        <label htmlFor="confPassword" className={`col-3 ${styles["ti-label"]}`}>Confirm Password</label>

                        <input type="password" class={`form-control col-9 ${styles["ti-input"]}`} id="email" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}} />
                    </div>
                            
                    <button className={` btn btn-primary btn-lg ${styles["btn-sub"]} `} type="submit">SUBMIT</button>    
                            
                </form>
            </div>

        </div>
    );
}
export default AddAdmin;