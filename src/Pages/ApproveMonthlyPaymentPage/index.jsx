import React from "react";
import PaymentDetailsTable from "../../Components/ApproveMonthlyPayment/PaymentDetailsTable/PaymentDetailsTable.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";
import styled from './index.module.css';

const drawerWidth = 240;

export default function ApproveMonthlyPayment() {

  // Database records as a object like this
  const records = [
    {
      id: "ID",
      name: "Name",
      date: "Date",
      month: "Month",
      special_notes: "Special Notes",
      receipt: "Receipt",
    },
    {
      id: 111,
      name: "Kasun",
      date: "2012-12-12",
      month: "January",
      special_notes: "I want to loose weight",
      receipt: "Receipt"
    },
    {
      id: 222,
      name: "Amal",
      date: "2012-12-12",
      month: "February",
      special_notes: "I want to loose weight",
      receipt: "Receipt"
    },
    {
      id: 333,
      name: "Amal",
      date: "2012-12-12",
      month: "February",
      special_notes: "I want to loose weight",
      receipt: "Receipt"
    },
  ];

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
                          name={record["name"]}
                          date={record["date"]}
                          month={record["month"]}
                          special_notes={record["special_notes"]}
                          receipt={record["receipt"]}
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
