import React, { useState,useEffect } from "react";

import { Card, Form } from "react-bootstrap";

import { FiEdit } from "react-icons/fi";

import Button from "../UI/Button/Button.js";

import styled from "./MemberProfile.module.css";
import {profileUpdate} from '../../services/userServices';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MemberProfile(props) {
  console.log(props.name)
  const [id, setId] = useState('');
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);
  const [contactNo, setContactNo] = useState(props.contact_no);
  const [email, setEmail] = useState(props.email);
  const [DOB, setDOB] = useState(props.dob);

  const [isEdit, setIsEdit] = useState(false);





  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  const contactHandler = (event) => {
    setContactNo(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const dobHandler = (event) => {
    setDOB(event.target.value);
  };

  const formUpdateHandler = async(event) => {
    event.preventDefault();
    try {
                
      // console.log(slip)
    
    
      const response = await profileUpdate(name,address,contactNo,email,DOB);

      // Set to 3sec
      toast.success('successfully updated', {autoClose:3000})
      window.location = "";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
           // Set to 10sec
           toast.error(ex.response.data, {
              // Set to 15sec
              autoClose:5000});
             
      }
    }
  };

  return (
    <div className={styled["profile"]}>
      <header className={styled["header"]}>
        <h1 className={styled["header-name"]}>{name}</h1>
        <h5>{id}</h5>
      </header>

      <section>
        <div className={styled['detail-title-container']}>
          <h3 className={styled["details-title"]}>Member Details</h3>
          <button className={styled['edit-btn']} onClick={editHandler}><FiEdit/></button>
        </div>
        

        <Form onSubmit={formUpdateHandler} className={styled['detail-form']}>
          <div>
            <div className={styled["detail-container"]}>
              <label className={styled["detail-label"]}>Account Name</label>{" "}
              <input
                type="text"
                onChange={nameHandler}
                className={styled["detail-field"]}
                value={name}
                disabled={!isEdit}
                required
              ></input>
            </div>
            <div className={styled["detail-container"]}>
              <label className={styled["detail-label"]}>Address</label>{" "}
              <input
                type="text"
                onChange={addressHandler}
                className={styled["detail-field"]}
                value={address}
                disabled={!isEdit}
                required
              ></input>
            </div>
            <div className={styled["detail-container"]}>
              <label className={styled["detail-label"]}>Contact Number</label>{" "}
              <input
                type="text"
                onChange={contactHandler}
                className={styled["detail-field"]}
                value={contactNo}
                disabled={!isEdit}
                required
              ></input>
            </div>
            <div className={styled["detail-container"]}>
              <label className={styled["detail-label"]}>email</label>{" "}
              <input
                type="text"
                onChange={emailHandler}
                className={styled["detail-field"]}
                value={email}
                disabled={!isEdit}
                required
              ></input>
            </div>
            <div className={styled["detail-container"]}>
              <label className={styled["detail-label"]}>Date of Birth</label>{" "}
              <input
                type="text"
                onChange={dobHandler}
                className={styled["detail-field"]}
                value={DOB}
                disabled={!isEdit}
                required
              ></input>
            </div>
          </div>

          <Button
            className={styled["btn-update"]}
            value="UPDATE"
            disabled={!isEdit}
          />
        </Form>
      </section>
    </div>
  );
}

export default MemberProfile;
