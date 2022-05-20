import React from 'react';
import styled from './Button.module.css';

function Button(props){

    return(
        <React.Fragment>
            <button className={`${styled['button']} ${props.className}`}>{props.value}</button>
        </React.Fragment>
    );

}

export default Button;