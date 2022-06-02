import React,{useEffect, useState} from "react";
import PaymentDetailsTable from "../../Components/ApproveMonthlyPayment/PaymentDetailsTable/PaymentDetailsTable.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";
import styled from './index.module.css';
import { pendingPaymentList } from "../../services/paymentServices";

const drawerWidth = 240;

export default function ApproveMonthlyPayment() {

  const [records , setRecord] = useState([]);
   
    useEffect(() => {
        async function getPayments() {
          const result = await pendingPaymentList();
          console.log(result);
          setRecord(result.data);
        }
    
        getPayments();
      });

  return (
    
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
            
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
                aria-label="mailbox folders"
                
            >
                
                <AdminSideNavBar/>
                
            </Box>
            
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `url(${adminBackgroundImage})` }}
            >
                <div className={styled['main-container']}>
                  <div className="container">
                  <header className={styled['header']}>
                    <h1> Pending Monthly Payments </h1>
                  </header>
                  <div className={styled['table-holder']}>
                    {records.map((record) => {
                      return (
                        <PaymentDetailsTable
                          key={record["id"]}
                          name={record["Name"]}
                          email={record["email"]}
                          month={record["month"]}
                          special_notes={record["description"]}
                          receipt={record["slipPath"]}
                        />
                      );
                    })}
                  </div>
                  </div>
                </div>
                            
                
            </Box>
        </Box>
      
    </React.Fragment>
  );
}
