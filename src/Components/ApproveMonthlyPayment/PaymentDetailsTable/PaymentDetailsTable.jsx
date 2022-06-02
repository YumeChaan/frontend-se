import React, { useState } from "react";

import PaymentDetailsForm from "../PaymentDetailsForm/PaymentDetailsForm.jsx";

import styled from "./PaymentDetailsTable.module.css";

function PaymentDetailsTable(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  return (
    <>
      {show && <PaymentDetailsForm 
      key={props.key}
      name={props.name}
      email={props.email}
      month={props.month}
      special_notes={props.special_notes}
      receipt={props.receipt}
      onClose={modalCloseHandler}/>}

      <div
        onClick={modalShowHandler}
        className={`${styled["table-record"]} ${props.className}`}
      >
        <div className={`row`}>
            <div className={`col-md-3 col-6 ${styled["data"]}`}>{props.name}</div>
            <div className={`col-md-3 d-none d-md-block ${styled["data"]}`}>{props.email}</div>
            <div className={`col-md-3 col-6 ${styled["data"]}`}>{props.month}</div>
            <div className={`col-md-3 d-none d-md-block ${styled["data"]}`}><a href={"http://localhost:5000/"+props.receipt} target="_blank" className={styled["receipt"]}>Download</a></div>
        </div>
        
        
      </div>
    </>
  );
}

export default PaymentDetailsTable;

