import React from "react";
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";


import styled from "./PaymentDetailsForm.module.css";

function Overlay(props) {
  return <div className={styled["backdrop"]} onClick={props.onClose} />;
}

function FormModal(props) {
  return (
     
        <Card className={styled["modal"]}>
            <div className={styled["modal-header"]}>
                <h2>{props.name}</h2>
            </div>
            <div className="modal-body">
                <form action="" method="POST">
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
                            <span>Email</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.email}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Month</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.month}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Special Notes</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: {props.special_notes}</span>
                        </div>
                    </div>
                    <div className={`row form-group`}>
                        <div className={`col-3`}>
                            <span>Payment Receipt</span>
                        </div>
                        <div className={`col-9`}>
                            <span>: <a href={"http://localhost:5000/"+props.receipt} target="_blank" className={styled["receipt"]}>Download</a> </span>
                        </div>
                    </div>

                    <div className={`row form-group`}>
                        <div className={`col-md-6`}>
                            <a href="" type="submit" className={` btn btn-success ${styled["app-btn"]} ${styled["s-btn"]}`} >Approve</a>
                        </div>

                        <div className={`col-md-6`}>
                            <a href="" className={` btn btn-danger ${styled["dec-btn"]} ${styled["s-btn"]}`} >Decline</a>
                            
                        </div>
                    </div>


                </form>
                
            </div>
        </Card>
      
    
  );
}

function PaymentDetailsForm(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        document.getElementById("modal-overlay")
      )}

      {ReactDOM.createPortal(
        <FormModal 
        key={props.key}
        name={props.name}
        email={props.email}
        month={props.month}
        special_notes={props.special_notes}
        receipt={props.receipt}
        message={"Hello world"} />,

        document.getElementById("modal-content")
      )}
    </React.Fragment>
  );
}

export default PaymentDetailsForm;
