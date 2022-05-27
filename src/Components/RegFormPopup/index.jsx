import React, {useState} from "react";
import styles from './index.module.css';

function RegFormPopup(props) {
    

    return (props.trigger) ? (
        <div className={styles['popup']}>
            <div className={styles['popup-inner']}>
                {props.children}
                <div className={styles['popup-btn']}>
                <button type="button" class="btn btn-light btn-block btn-sm gradient-custom-4 text-body" onClick={() => props.setTrigger(false)}>Cancel</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default RegFormPopup;