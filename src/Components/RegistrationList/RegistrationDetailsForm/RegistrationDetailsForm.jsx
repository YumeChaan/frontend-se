import React from "react";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";
import {approveRegistration} from '../../../services/adminServices'
import {declineRegistration} from '../../../services/adminServices'
import styled from "./RegistrationDetailsForm.module.css";

function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal(props) {
    const {id}=props;
    console.log(id)
    function handleAccept(id_){
        async function approveRegistration_() {
            
            const result = await approveRegistration(id_);
           
          }
      
          approveRegistration_();
        }
    
    function handleDecline(id_){
        async function declineRegistration_() {
            const result = await declineRegistration(id_);
           
          }
      
          declineRegistration_();
        }
  return (
    
        <Card className={styled["modal"]}>
            <div className={styled["modal-header"]}>
                <h2>{props.name}</h2>
            </div>
            <div className="modal-body">
                <form action="">
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Name</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.name}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Gender</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.gender}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Birthday</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.birthday}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Address</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.address}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Contact Number</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.contact}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Email</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.email}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Payment Receipt</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: <a href={"https://fitness24x7.herokuapp.com"+props.receipt} target="_blank" className={styled["receipt"]}>Download</a> </span>
                        </div>
                    </div>

                    <div className={`row form-group`}>
                        <div className={`col-md-6`}>
                            <button type="submit" className={` btn btn-success ${styled["app-btn"]} ${styled["s-btn"]}`} onClick={()=>{handleAccept(id)}}  >Approve</button>
                        </div>

                        <div className={`col-md-6`}>
                            <button type="submit" className={` btn btn-danger ${styled["dec-btn"]} ${styled["s-btn"]}`}onClick={()=>{handleDecline(id)}}  >Decline</button>
                        </div>
                    </div>


                </form>
                
            </div>
        </Card>
      
    
  );
}

function RegistrationDetailsForm(props) {
  return (
    <React.Fragment>

        
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        document.getElementById("modal-overlay")
      )}

      {ReactDOM.createPortal(
        <FormModal 
        
        id={props.id}
        name={props.name}
        gender={props.gender}
        birthday={props.birthday}
        address={props.address}
        contact={props.contact}
        email={props.email}  
        receipt={props.receipt}
        message={"Hello world"} />,

        document.getElementById("modal-content")
      )}
    </React.Fragment>
  );
}

export default RegistrationDetailsForm;
