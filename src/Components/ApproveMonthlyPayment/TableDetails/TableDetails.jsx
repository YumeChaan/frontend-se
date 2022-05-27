import React from 'react';

import styled from './TableDetails.module.css';

function TableDetails(props){




    return(
        <div className={`${styled["table-record"]} ${props.className}`}>
            <div className={styled['data']}>{props.name}</div>
            <div className={`${styled['data']} ${styled['small-data']}`}>{props.date}</div>
            <div className={`${styled['data']} ${styled['small-data']}`}>{props.month}</div>
            <div className={`${styled['data']} ${styled['big-data']}`}>{props.special_notes}</div>
            <div className={`${styled['data']} ${styled['small-data']}`}>{props.receipt}</div>
            <div className={`${styled['data']} `}>
                <button type='submit' className={`${styled['acc-btn']} ${styled['u-btn']}`}>Accept</button>
            </div> 
            <div className={`${styled['data']}`}>
                <button type='submit' className={`${styled['dec-btn']} ${styled['u-btn']}`}>Decline</button>
            </div> 

        </div>
    );
}

export default TableDetails