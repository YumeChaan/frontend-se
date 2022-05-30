import React, {useState} from "react";
import { AiFillHome } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import RegisterNavBar from "../../Components/RegisterNavBar";
import fitnessLogo from "../../Resources/Images/company-logo.png";
import Button from '../../Components/UI/Button/Button.js'
import CompanyCard from "../../Components/UI/CompanyCard/CompanyCard";
import RegFormPopup from "../../Components/RegFormPopup";
import styles from './index.module.css';

function Register() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [name , setName] = useState('');
    const [birthday , setBirthday] = useState('');
    const [weight , setWeight] = useState('');
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
    const handleBirthdayChange =(e)=>{
      setBirthday(e.target.value);
    }
    const handleWeightChange =(e)=>{
        setWeight(e.target.value);
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
      if(password!=confPassword)
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
    return (
        <div className={styles['main-container']} >
            <main>
            <div className={styles['navbar-border']}>
                <RegisterNavBar/>
            </div>
            <div className={styles['sub-container']}>
                <div className={styles['img-div']}>
                    <img src={fitnessLogo} alt="fitness image" className={styles['fitness-img']} />
                    
                </div>
                <br />
                <label className={styles['company-name']}><span className={styles["company-name-span"]}>24/7</span> FITNESS</label>
                <div className={styles['description']}>
                    <p>
                        Full time access for all the gym equipments and customize <br /> meal plan and workout plan for everybody type just for :
                    </p>
                    <ul>
                        <li>500 LKR Registration Fee</li>
                        <li>3000 LKR Monthly Fee</li>
                    </ul>
                </div>
                <div className={styles['button-holder']}>
                <a href="#" onClick={() => setButtonPopup(true)}><Button value="JOIN NOW"/> </a>  
                </div>
            </div>
            
            
            <div className={styles['footer']} >
                <CompanyCard />
                <div className={styles['contact-details']}>
                <h6 class="text-uppercase fw-bold mb-4">
                    Contact us:
                </h6>
                <p class="text-muted"><AiFillHome size={20} />&nbsp;&nbsp;&nbsp;Kandy Road, Yakkala(Near Food city)</p>
                <p class="text-muted"><FaEnvelope size={20} />&nbsp;&nbsp;&nbsp;fitness24@gmail.com</p>
                <p class="text-muted"><IoCallSharp size={20} />&nbsp;&nbsp;&nbsp;011-2232412</p>
                </div>
            </div>
            </main>

            {/* Registration Form */}
            <RegFormPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className={styles["form-popup"]} id="myForm">
                <form onSubmit={(e) => {handleSubmit(e)}} className={styles["form-container"]}>
                    {/*when user submit the form , handleSubmit()
                        function will be called .*/}
                    <h3> Registration Form </h3><br/>
                    <table>
                        <tr>
                            <td>
                        <label >
                        Name:
                        </label>
                        </td>
                        <td><input type="text" value={name} required onChange={(e) => {handleChange(e)}} /></td>
                        </tr>
                        <tr>
                            <td>
                        <label >
                        Birthday:
                        </label>
                        </td>
                        <td><input type="date" value={birthday} required onChange={(e) => {handleBirthdayChange(e)}} /></td>
                        </tr>
                        <tr>
                            <td>
                        <label >
                        Weight:
                        </label></td>
                        <td><input type="text" value={weight} required onChange={(e) => {handleWeightChange(e)}} /></td>
                        </tr>
                        <tr>
                            <td>
                        <label >
                        Address:
                        </label></td>
                        <td><input type="text" value={address} required onChange={(e) => {handleAddressChange(e)}} /></td>
                        </tr>
                        <tr>
                            <td>
                        <label >
                        Phone Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label></td>
                        <td><input type="text" value={phone} required onChange={(e) => {handlePhoneChange(e)}} /></td>
                        </tr>
                        <tr>
                            <td>
                        <label>
                        Email:
                        </label></td>
                        <td><input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /></td>
                        </tr></table>

                        <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <label >
                        Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        
                        <div class="form-check form-check-inline mb-0 me-4">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" />
                            <label class="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                            <label class="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div class="form-check form-check-inline mb-0">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
                            <label class="form-check-label" for="otherGender">Other</label>
                        </div>
                        </div>
                        <table>
                        <tr>
                            <td>
                        <label >
                        User Name:
                        </label></td>
                        <td><input type="text" value={username} required onChange={(e) => {handleUsernameChange(e)}} /></td>
                        </tr>
                        <tr>
                            <td>
                        <label>
                        Password:
                        </label></td>
                        <td><input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} /></td>
                        </tr>
                        <tr>
                            <td>
                        <label>
                        Confirm Password:&nbsp;
                        </label></td>
                        <td><input type="password" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}} /></td>
                        </tr>
                        <tr>
                            <td>
                        <label>
                        Payment Receipt:
                        </label></td>
                        <td><input type="file" class={`form-control-file`} id="receipt"/></td>
                        </tr>
                        </table>
                        <p style={{color: "#b0b3b8", fontStyle: 'bold'}}>Registration Fee - 500 LKR <br/> + Monthly Fee - 3000 LKR</p>

                        <button type="submit" class="btn btn-warning btn-block btn-sm gradient-custom-4 text-body">Submit</button>
                        
                        
                    </form>
                </div>
            </RegFormPopup>
            
        </div>
    );
}

export default Register;