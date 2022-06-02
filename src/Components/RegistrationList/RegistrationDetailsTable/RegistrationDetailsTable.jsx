import React, { useState } from "react";

import RegistrationDetailsForm from "../RegistrationDetailsForm/RegistrationDetailsForm.jsx";

import styled from "./RegistrationDetailsTable.module.css";

function RegistrationDetailsTable(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  return (
    <>
      {show && <RegistrationDetailsForm 
      key={props.key}
      name={props.name}
      age={props.age}
      gender={props.gender}
      birthday={props.birthday}
      address={props.address}
      contact={props.contact}
      email={props.email} 
      receipt={props.receipt}
      onClose={modalCloseHandler}/>}

      <div
        onClick={modalShowHandler}
        className={`${styled["table-record"]} ${props.className}`}
      >
        <div className={`row`}>
            <div className={`col-md-4 col-6 ${styled["data"]}`}>{props.name}</div>
            <div className={`col-md-4 d-none d-md-block ${styled["data"]}`}>{props.email}</div>
            <div className={`col-md-4 col-6 ${styled["data"]}`}>{props.contact}</div>
        </div>
        
        
      </div>
    </>
  );
}

export default RegistrationDetailsTable;
