import React from 'react';

import CompanyCard from '../UI/CompanyCard/CompanyCard.js';

import styles from './IndexFooter.module.css';



function IndexFooter(props){
    return (
        <div className={`${styles['container']} ${props.className}`}>
            <CompanyCard/>

            <div className={styles['company-details']}>
                Contact us: 011-2232412 <br/>
                Email: fitness24@gmail.com<br/>
                Address:Kandy Road, Yakkala(Near Food city)
            </div>
            
        </div>
    );
}

export default IndexFooter;