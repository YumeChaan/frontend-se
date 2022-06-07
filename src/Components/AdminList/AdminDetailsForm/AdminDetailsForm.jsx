import React from "react";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";
import {declineAdmin} from '../../../services/adminServices'

import styled from "./AdminDetailsForm.module.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal(props) {
    const {id}= props;
    function handleDecline(id_){
        async function removeAdmin() {
            const result = await declineAdmin(id_);
            toast.success('Removed successfully', {autoClose:3000})
            window.location = "/admin/admin-list";
           
          }
      
          removeAdmin();
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

                    <div className={`text-right`}>
                        <button type="submit" className={`btn ${styled["remove-btn"]}`} onClick={()=>{handleDecline(id)}} >Remove</button>
                    </div>


                </form>
                
            </div>
        </Card>
      
    
  );
}

function AdminDetailsForm(props) {
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
        age={props.age}
        gender={props.gender}
        birthday={props.birthday}
        address={props.address}
        contact={props.contact}
        email={props.email}  
        message={"Hello world"} />,

        document.getElementById("modal-content")
      )}
    </React.Fragment>
  );
}

export default AdminDetailsForm;
