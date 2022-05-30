import React from "react";
import { AiFillHome } from "react-icons/ai";
import Button from '../UI/Button/Button.js'
import styles from './index.module.css';

function LoginNavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
                <div class="collapse navbar-collapse" id="navbarSupportedContent" className={styles['navbar-item']} >
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" className={styles['compnay-name-div']}>
                    <label className={styles['company-name']}><span className={styles["company-name-span"]}>24/7</span> FITNESS</label>
                    </li>
                    <li class="nav-item">
                        <div className={styles['button-holder']}>
                        <a class="nav-link" href="./"><AiFillHome size={35} color="red" /></a>  
                        </div>
                    </li>
                    </ul>
                   
                </div>
                </nav>
        </div>
    );
}

export default LoginNavBar;