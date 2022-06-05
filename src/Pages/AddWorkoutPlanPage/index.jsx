import React from "react";
import TableRecord from "../../Components/AddWorkoutPlan/TableRecord/TableRecord.js";
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import styled from './index.module.css';

const drawerWidth = 240;


export default function AddWorkoutPlanPage() {

  // Database records as a object like this
  const records = [
    {
      id: 111,
      name: "Kasun",
      date: "2012-12-12",
      current_weight: "80kg",
      target_weight: "72kg",
      other_comments: "I want to loose weight",
      status: "plan not added",
    },
    {
      id: 222,
      name: "Amal",
      date: "2012-12-12",
      current_weight: "82kg",
      target_weight: "70kg",
      other_comments: "I want to loose weight",
      status: "plan not added",
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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `linear-gradient(to right, #1a1a1a, #333333, #1a1a1a);` }}
            >
                
                <div className={styled['main-container']}>
                  <header className={styled['header']}>
                    <h1> Workout Plan Requests</h1>
                  </header>
                  <div className={styled['table-holder']}>
                    {records.map((record) => {
                      return (
                        <TableRecord
                          key={record["id"]}
                          name={record["name"]}
                          date={record["date"]}
                          current_weight={record["current_weight"]}
                          target_weight={record["target_weight"]}
                          other_comments={record["other_comments"]}
                          status={record["status"]}
                        />
                      );
                    })}
                  </div>
                </div>
                
                
            </Box>
        </Box>
      
    </React.Fragment>
  );
}
