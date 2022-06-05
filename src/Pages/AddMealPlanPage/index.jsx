import React,{useState,useEffect} from "react";

import TableRecord from "../../Components/AddMealPlan/TableRecord/TableRecord.js";
import styled from './index.module.css';
import {mealRequestList} from '../../services/mealPlanService'
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";


const drawerWidth = 240;

export default function AddMealPlanPage() {

const [records,setRecords]=useState([]);
useEffect(() => {
  async function getMealReqest() {
    const result = await mealRequestList();
    setRecords(result.data);
  }

  getMealReqest();
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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `linear-gradient(to right, #1a1a1a, #333333, #1a1a1a);` }}
            >
                
                <div className={styled['main-container']}>
                  <header className={styled['header']}>
                    <h1> Meal Plan Requests</h1>
                  </header>
                  <div className={styled['table-holder']}>
                    {records.map((record) => {
                      return (
                        <TableRecord
              key={record["id"]}
              id_={record["id"]}
              name={record["Name"]}
              date={record["req_date"]}
              current_weight={record["current_weight"]}
              target_weight={record["target_weight"]}
              other_comments={record["note"]}
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
