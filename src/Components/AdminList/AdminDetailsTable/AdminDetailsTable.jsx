import React, { useState } from "react";

import AdminDetailsForm from "../AdminDetailsForm/AdminDetailsForm.jsx";

import styled from "./AdminDetailsTable.module.css";

function AdminDetailsTable(props) {
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => setShow(false);
  const modalShowHandler = () => setShow(true);

  return (
    <>
      {show && <AdminDetailsForm 
      key={props.key}
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
            <div className={`col-md-3 col-6 ${styled["data"]}`}>{props.name}</div>
            <div className={`col-md-6 d-none d-md-block ${styled["data"]}`}>{props.email}</div>
            <div className={`col-md-3 col-6 ${styled["data"]}`}>{props.contact}</div>
        </div>
        
        
      </div>
    </>
  );
}

export default AdminDetailsTable;
