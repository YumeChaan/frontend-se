import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./monthlyPayment.module.css";
import bank1 from './bank-1.png';
import bank2 from './bank-2.png'


function addMonthlyPayment(){
    return(
        <div className={`container ${styles["con-month"]}`}>
                <div className="">
                    <form action="">
                        <h1 className={`text-center py-3 ${styles["title"]}`}>Add Your Monthly Payment</h1>
                        <p className={`text-center py-2 ${styles["info"]}`}>PLEASE MAKE SURE TO MENTION YOUR NAME AS THE NARRATION/ DESCRIPTION/ REMARK/ BENEFICIARY REMARK TO TRACK YOUR PAYMENT EASILY.</p>
                        <div className={`form-group`}>
                            <label htmlFor="month">Month *</label>

                            <select className={`form-control ${styles["input-f"]}`} id="month">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>

                        <div className={`form-group`}>
                            <label htmlFor="notes">Special Notes</label>
                            <textarea className={`form-control ${styles["input-f"]}`} id="notes" rows="3"></textarea>
                        </div>

                        <div className={`form-group`}>
                            <label for="receipt">Upload a copy(photo) of your deposit slip/transaction receipt. *</label>
                            <input type="file" class={`form-control-file`} id="receipt"></input>
                        </div>
                        <hr className={`mb-4`} />

                        <div className={`form-group row py-3`}>
                            <div className={`col-sm-6`}>
                                <img src={bank1} alt="bank-1" className={styles["bank"]}/>
                            </div>
                            <div className={`col-sm-6`}>
                                <img src={bank2} alt="bank-1" className={styles["bank"]} />
                            </div>
                        </div>

                        <hr className={`mb-4`} />
                        <div className={`${styles["button-sub"]}`}></div>
                        <button className={` btn btn-primary btn-lg ${styles["btn-sub"]} `} type="submit">SUBMIT</button>
                        
                    </form>

                </div>
                
 
        </div>
    );
    
}

export default addMonthlyPayment;