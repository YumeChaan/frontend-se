import React, { useState } from "react";
import styled from "./PrePaymentTable.module.css";

function PrePaymentTable(props) {

  return (
    <>

      <div
        className={`${styled["table-record"]} ${props.className}`}
      >
        <div className={`row`}>
            <div className={`col-md-2 col-6 ${styled["data"]}`}>{props.month}</div>
            <div className={`col-md-2 col-6 ${styled["data"]}`}>{props.status}</div>
            <div className={`col-md-2 d-none d-md-block ${styled["data"]}`}> <a href={"http://localhost:5000/"+props.receipt} target="_blank" className={styled["receipt"]}>Download</a> </div>
            <div className={`col-md-6 d-none d-md-block ${styled["data"]}`}>{props.description}</div>
        </div>
        
        
      </div>
    </>
  );
}

export default PrePaymentTable;
