import React, {useState} from "react";
import Joi from "joi-browser";
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
    const [receipt, setReceipt] = useState('');
    const [gender, setGender] = useState('male');

    const [user, setUser] = useState({
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
        const result = Joi.validate(user,
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
        let userData = { ...user };
        userData[name] = value;
        setUser(userData);
        setErrors(errorData);
    };

    const handleReceiptChange = (e) =>{
        setReceipt(e.target.value);
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value)
      }

    const validateProperty = (event) => {
        const { name, value } = event.target;
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
    };

    
    const handleSubmit=(e)=>{
      e.preventDefault();
 
    };

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
                        <td><input type="text" name="name" value={user.name} required onChange={handleSave} />
                        {errors.name && (
                          <div className={`alert alert-danger ${styles["error"]}`}>
                            Invalid Name
                          </div>)} </td>
                        </tr>
                        <tr>
                            <td>
                        <label >
                        Birthday:
                        </label>
                        </td>
                        <td><input type="date" name="birthday" value={user.birthday} required onChange={handleSave} />
                        {errors.birthday && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Invalid Birthday
                            </div>)}
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <label >
                        Address:
                        </label></td>
                        <td><input type="text" name="address" value={user.address} required onChange={handleSave} />
                        {errors.address && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Invalid Address
                            </div>)}
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <label >
                        Phone Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label></td>
                        <td><input type="text" name="phone" value={user.phone} required onChange={handleSave} />
                        {errors.phone && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Invalid Phone Number
                            </div>)}
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <label>
                        Email:
                        </label></td>
                        <td><input type="email"name="email" value={user.email} required onChange={handleSave} />
                        {errors.email && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Invalid Email
                            </div>)}
                        </td>
                        </tr></table>

                        <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <label >
                        Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>

                        <div class="form-check form-check-inline mb-0 me-4">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                            <label class="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                            <label class="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline mb-0">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="other" checked={gender === 'other'} onChange={handleGenderChange} />
                            <label class="form-check-label" for="otherGender">Other</label>
                        </div>
                        </div>
                        {console.log(gender)}
                        <table>
                        <tr>
                            <td>
                        <label >
                        User Name:
                        </label></td>
                        <td><input type="text" name="username" value={user.username} required onChange={handleSave} />
                        {errors.username && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Username must be filled and less than 20 characters
                            </div>)}
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <label>
                        Password:
                        </label></td>
                        <td><input type="password" name="password" value={user.password} required onChange={handleSave} />
                        {errors.password && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              Password must be at least 8 characters long contain a number, an uppercase letter, a lowercase letter and a special character 
                            </div>)}
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <label>
                        Confirm Password:&nbsp;
                        </label></td>
                        <td><input type="password" name="confPassword" value={user.confPassword} required onChange={handleSave} />
                        {errors.confPassword && (
                            <div className={`alert alert-danger ${styles["error"]}`}>
                              {"Passwords do not match"}
                            </div>)}
                        </td>
                        </tr>
                        <tr>
                            <td>
                        <label>
                        Payment Receipt:
                        </label></td>
                        <td><input type="file" class={`form-control-file`} id="receipt" name="receipt" value={receipt} onChange={(e) => {handleReceiptChange(e)}} required/></td>
                        </tr>
                        </table>
                        <p style={{color: "#b0b3b8", fontStyle: 'bold'}}>Registration Fee - 500 LKR <br/> + Monthly Fee - 3000 LKR</p>

                        <button type="submit" class="btn btn-warning btn-block btn-sm gradient-custom-4 text-body" onClick={validateForm}>Submit</button>
                        
                        
                    </form>
                </div>
            </RegFormPopup>
            
        </div>
    );
}

export default Register;