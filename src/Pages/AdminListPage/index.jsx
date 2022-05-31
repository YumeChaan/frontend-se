import React, {useState,useEffect} from "react";
import AdminDetailsTable from "../../Components/AdminList/AdminDetailsTable/AdminDetailsTable.jsx";
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import styled from './index.module.css';
import {adminList} from '../../services/adminServices';
import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";

const drawerWidth = 240;

function AdminList() {
    const [records , setRecord] = useState([]);
   
    useEffect(() => {
        async function getAdmin() {
          const result = await adminList();
          setRecord(result.data);
        }
    
        getAdmin();
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
                    <div className={`container`}>
                        <header className={styled['header']}>
                            <h1>Admin List</h1>
                        </header>
                        <div className={styled['table-holder']}>
                            {records.map((record) => {
                            return (
                                <AdminDetailsTable
                                key={record["id"]}
                                name={record["name"]}
                                age={record["age"]}
                                gender={record["gender"]}
                                birthday={record["birthday"]}
                                address={record["address"]}
                                contact={record["contact"]}
                                email={record["email"]}
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

export default AdminList;