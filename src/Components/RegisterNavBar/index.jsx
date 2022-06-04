import React from "react";
import { AiFillHome } from "react-icons/ai";
import Button from '../UI/Button/Button.js'
import styles from './index.module.css';

function RegisterNavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
                <div class="collapse navbar-collapse" id="navbarSupportedContent" className={styles['navbar-item']} >
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="./"><AiFillHome size={35} color="red" /></a>
                    </li>
                    <li class="nav-item">
                        <div className={styles['button-holder']}>
                        <a href='./login' alt='LoginLink'><Button value="LOGIN"/> </a>     
                        </div>
                    </li>
                    </ul>
                   
                </div>
                </nav>
        </div>
    );
}

export default RegisterNavBar;