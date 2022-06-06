import React from 'react';

import CompanyCard from '../UI/CompanyCard/CompanyCard.js';
import Button from '../UI/Button/Button.js'

import styles from './IndexNavBar.module.css';



function IndexNavBar(props){
    return (
        <div className={`${styles['container']} ${props.className}`}>
            <CompanyCard/>

            <div className={styles['button-holder']}>
                <a href='./register' alt='LoginLink'><Button value="SIGN UP"/></a>  
                <a href='./login' alt='LoginLink'><Button value="LOGIN"/>  </a>      
            </div>
            
        </div>
    );
}

export default IndexNavBar;