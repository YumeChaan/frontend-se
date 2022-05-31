import React from "react";
import AdminDetailsTable from "../../Components/AdminList/AdminDetailsTable/AdminDetailsTable.jsx";
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import styled from './index.module.css';
import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";

const drawerWidth = 240;

function AdminList() {
    const records = [
        {
            id: "ID",
            name: "Name",
            age: "Age",
            gender: "Gender",
            birthday: "Birthday",
            address: "Address",
            contact: "Contact Number",
            email: "Email"

        },
        {
            id: 111,
            name: "Chan",
            age: 23,
            gender: "Female",
            birthday: "1998-12-12",
            address: "Pawani, Meda Mawatha, Ella Road, Kurundugaha, Elpitiya.",
            contact: "0789675634",
            email: "chanmahaarachchi@gmail.com"
        },
        {
            id: "ID",
            name: "Mahaarachchi",
            age: 25,
            gender: "Male",
            birthday: "1997-12-12",
            address: "Piyumi, Meda Mawatha, Ella Road, Kurundugaha, Elpitiya.",
            contact: "0767806547",
            email: "piyumimahaarachchi@gmail.com"
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