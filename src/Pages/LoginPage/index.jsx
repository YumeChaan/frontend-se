import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './login.module.css'
import login from './login2.jpg'
import logo from './logo.png'



function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    //login info
    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
    ];

    const errors = {
        uname: "Invalid Username",
        pass: "Invalid Password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
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
                            <p className={`${styles["login-card-footer-text"]}`}>Don't have an account? <a href="#!" className={`text-reset`}>Register here</a></p>
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