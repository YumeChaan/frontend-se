import React from 'react';

import CompanyCard from '../UI/CompanyCard/CompanyCard.js';
import Button from '../UI/Button/Button.js'

import styles from './IndexNavBar.module.css';



function IndexNavBar(props){
    return (
        <div className={`${styles['container']} ${props.className}`}>
            <CompanyCard/>

            <div className={styles['button-holder']}>
                <Button value="SIGN UP"/>
                <Button value="LOGIN"/>        
            </div>
            
        </div>
    );
}

export default IndexNavBar;