import React, { useState } from "react";

import MemberDetailsForm from "../MemberDetailsForm/MemberDetailsForm.jsx";

import styled from "./MemberDetailsTable.module.css";

function MemberDetailsTable(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  return (
    <>
      {show && <MemberDetailsForm 
      id={props.id}
      name={props.name}
      gender={props.gender}
      birthday={props.birthday}
      address={props.address}
      contact={props.contact}
      email={props.email} 
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

export default MemberDetailsTable;
