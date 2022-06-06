import React, {useState,useEffect} from "react";
import AdminDetailsTable from "../../Components/AdminList/AdminDetailsTable/AdminDetailsTable.jsx";
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import AdminBackgroundImage from "../../Resources/Images/admin-background.jpg";
import styled from './index.module.css';
import {adminList} from '../../services/adminServices';


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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `linear-gradient(to right, #1a1a1a, #333333, #1a1a1a);` }}
            >
                
                <div className={styled['main-container']}>
                    <div className={`container`}>
                        <header className={styled['header']}>
                            <h1>Admin List</h1>
                        </header>
                        <div className={styled['table-holder']}>
                            <div className={`${styled["table-record"]}`}>
                            <div className={`row`}>
                                <div className={`col-md-4 col-6 ${styled["data"]}`}>Name</div>
                                <div className={`col-md-4 d-none d-md-block ${styled["data"]}`}>Email</div>
                                <div className={`col-md-4 col-6 ${styled["data"]}`}>Contact Number</div>
                            </div>
                            </div>
                            {records.map((record) => {
                            return (
                                <AdminDetailsTable
                                key={record['username']}
                                id={record['username']}
                                name={record['Name']}
                                age={7}
                                gender={record['gender']}
                                birthday={record['birthday']}
                                address={record['address']}
                                contact={record['mobileNo']}
                                email={record['email']}
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