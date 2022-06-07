import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./monthlyPayment.module.css";
import bank1 from './bank-1.png';
import bank2 from './bank-2.png';
import Box from '@mui/material/Box';
import MemberSideNavBar from "../../Components/MemberSideNavBar";
import PrePaymentTable from "../../Components/PrePaymentList/PrePaymentTable.jsx";
import MemberBackgroundImage from "../../Resources/Images/member-background.jpg";
// import {monthlyFeePay} from '../../services/paymentServices'
import adminBackgroundImage from "../../Resources/Images/member-background.jpg";
import {monthlyFeePay,getPaymentsofSpecificuser} from '../../services/paymentServices';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const drawerWidth = 240;


function AddMonthlyPayment(){

   
    const [month, setMonth] = useState('January');
    const [notes, setNotes] = useState('');
    const [receipt, setReceipt] = useState('');
    const [records,setRecords]=useState([]);

    useEffect(() => {
        async function getPaymenList() {
          const result = await getPaymentsofSpecificuser();
          setRecords(result.data);
        //   console.log(records)
        }
    
        getPaymenList();
      });
    const handleMonthChange = (e) =>{
        setMonth(e.target.value);
    }

    const handleNotesChange = (e) =>{
        setNotes(e.target.value);
    }

    const handleReceiptChange = (e) =>{
        setReceipt(e.target.files[0]);
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
                
            // console.log(slip)
            
    
            const response = await monthlyFeePay(month,notes,receipt);

            // Set to 3sec
            toast.success('successful Paid wait till the admin aproved', {autoClose:3000})
            window.location = "/member/add-monthly-payment";
          } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                 // Set to 10sec
                 toast.error(ex.response.data, {
                    // Set to 15sec
                    autoClose:5000});
                   
            }
          }
   
    }

    return(
        <Box sx={{ display: 'flex' }}>
            
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
            aria-label="mailbox folders"
            
        >
            
            <MemberSideNavBar/>
            
        </Box>
        
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `url(${MemberBackgroundImage})` }}
        >
            
            <div className={styles['main-container']}>
        <div className={`container ${styles["con-month"]}`}>
                <div className="">
                    <form onSubmit={(e) => {handleSubmit(e)}} action="" method="POST">
                        <h1 className={`text-center py-3 ${styles["title"]}`}>Add Your Monthly Payment</h1>
                        <p className={`text-center py-2 ${styles["info"]}`}>PLEASE MAKE SURE TO MENTION YOUR NAME AS THE NARRATION/ DESCRIPTION/ REMARK/ BENEFICIARY REMARK TO TRACK YOUR PAYMENT EASILY.</p>
                        <div className={`form-group`}>
                            <label htmlFor="month">Month *</label>

                            <select className={`form-control ${styles["input-f"]}`} id="month" name="month" value={month} onChange={(e) => {handleMonthChange(e)}}>
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
                            <textarea className={`form-control ${styles["input-f"]}`} id="notes" rows="3" value={notes} onChange={(e) => {handleNotesChange(e)}}></textarea>
                        </div>

                        <div className={`form-group`}>
                            <label for="receipt">Upload a copy(photo) of your deposit slip/transaction receipt. *</label>
                            <input type="file" class={`form-control-file`} id="receipt" name="receipt"  onChange={(e) => {handleReceiptChange(e)}} required></input>
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

                        
                        {/* <div className={`${styles["button-sub"]}`}></div> */}
                        <button className={` btn btn-primary btn-lg ${styles["btn-sub"]} `} type="submit">SUBMIT</button>
                        
                    </form>

                </div>
                <hr className={`mb-4`} />
                <h2 className={` text-center ${styles['sub-title']}`}>Previous Payments </h2>
                <div className={styles['table-holder']}>
                    
                    <div className={`${styles["table-record"]}`}>
                    <div className={`row`}>
                        <div className={`col-md-2 col-6 ${styles["data"]}`}>Month</div>
                        <div className={`col-md-2 col-6 ${styles["data"]}`}>Status</div>
                        <div className={`col-md-2  d-none d-md-block ${styles["data"]}`}>Receipt</div>
                        <div className={`col-md-6  d-none d-md-block ${styles["data"]}`}>Description</div>
                    </div>
                    </div>
                    {records.map((record) => {
                    return (
                        <PrePaymentTable
                        key={record["id"]}
                        status={record["paymentStatus"]}
                        receipt={record["slipPath"]}
                        description={record["description"]}
                        month={record["month"]}
                        />
                    );
                    })}
                </div>
                
 
        </div>
        </div>
            
        </Box>
    </Box>
        
    );
    
}

export default AddMonthlyPayment;