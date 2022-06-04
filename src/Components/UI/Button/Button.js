import React from 'react';
import styled from './Button.module.css';

function Button(props){

    return(
        <React.Fragment>
            <button className={`${styled['button']} ${props.className}`} disabled={props.disabled}>{props.value}</button>
        </React.Fragment>
    );

}

export default Button;