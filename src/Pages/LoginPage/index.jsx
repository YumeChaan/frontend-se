import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './login.module.css'
import login from './login2.jpg'
import logo from './logo.png'
import authServices from "../../services/authServices";



function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);



  

    const errors = {
        uname: "Invalid Username or password",
        p:"sdkfjhgksjhg"
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //Prevent page reload
           
        
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        
        await authServices.login(uname.value,pass.value)
        
        
        // const {state} = this.props.location
        setIsSubmitted(true);
        // window.location = state ? state.from.pathname : "/";
        window.location="/"

        
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrorMessages({ name: "uname", message: errors.uname });
              }
            //   setErrorMessages({ name: "uname", message: ex });
          // Username not found
          
        }
       
        
    };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={`${styles["error"]}`}>{errorMessages.message}</div>
    );

    const renderForm = (
        <div className={`form-log`}>
            <form action="#!" className={`${styles["login-form"]}`} onSubmit={handleSubmit}>
                <div className={`form-group align-items-center`}>
                    <label for="username" className={`sr-only`}>Email</label>
                    <input type="username" name="uname" id="username" className={`form-control text-center ${styles["f-cont"]}`} placeholder="Username" required/>
                    {renderErrorMessage("uname")}
                </div>

                <div class="form-group mb-4">
                    <label for="password" className={`sr-only`}>Password</label>
                    <input type="password" name="pass" id="password" className={`form-control text-center ${styles["f-cont"]}`} placeholder="***********" required/>
                    {renderErrorMessage("pass")}
                </div>

                <input name="login" id="login" className={`btn btn-block mb-4 ${styles["login-btn"]}`} type="submit" value="Login" />
            </form>
        </div>
        
    );
    
    return (
        <div>
            <main className={`d-flex align-items-center min-vh-100 py-3 py-md-0`}>
                <div className={`container ${styles["login-container"]}`}>
                <div className={`card ${styles["login-card"]}`}>
                    <div className={`row no-gutters`}>
                    <div className={`col-lg-6 col-md-5`}>
                        <img src={login} alt="login" className={`${styles["login-card-img"]}`} /> 
                    </div>
                    <div className={`col-lg-6 col-md-7`}>
                        <div className={`card-body text-center ${styles["c-body"]}`}>
                            <div className={`${styles["brand-wrapper"]}`}>
                                <img src={logo} alt="logo" className={`${styles["logo"]}`} />
                            </div>
                            <p className={`${styles["login-card-description"]}`}>Sign into your account</p>
                            {isSubmitted ? <div></div> : renderForm}
                            <p className={`${styles["login-card-footer-text"]}`}>Don't have an account? <a href="./register" className={`text-reset`}>Register here</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </main>     
        </div>
    );
    }

export default Login;