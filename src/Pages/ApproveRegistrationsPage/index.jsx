import React,{useEffect,useState} from "react";
import RegistrationDetailsTable from "../../Components/RegistrationList/RegistrationDetailsTable/RegistrationDetailsTable.jsx";
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";
import styled from './index.module.css';
import {pendingMemberList} from '../../services/adminServices';
// import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";
const drawerWidth = 240;


function RegistrationList() {
   
   
    const [records , setRecord] = useState([]);
   
    useEffect(() => {
        async function getRegistrations() {
          const result = await pendingMemberList();
          setRecord(result.data);
        }
    
        getRegistrations();
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
                    <h1>Pending Registrations</h1>
                </header>
                <div className={styled['table-holder']}>
                    {records.map((record) => {
                    return (
                        <RegistrationDetailsTable
                        key={record["mobileNo"]}
                        name={record["Name"]}
                        age={8}
                        gender={record["gender"]}
                        birthday={record["birthday"]}
                        address={record["address"]}
                        contact={record["mobileNo"]}
                        email={record["email"]}
                        receipt={record["registerFeeSlip"]}
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

export default RegistrationList;