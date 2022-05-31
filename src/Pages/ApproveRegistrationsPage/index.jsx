import React from "react";
import RegistrationDetailsTable from "../../Components/RegistrationList/RegistrationDetailsTable/RegistrationDetailsTable.jsx";
import Box from '@mui/material/Box';
import AdminSideNavBar from "../../Components/AdminSideNavBar/index.jsx";
import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";
import styled from './index.module.css';

const drawerWidth = 240;


function RegistrationList() {
    const records = [
        {
            id: "ID",
            name: "Name",
            age: "Age",
            gender: "Gender",
            birthday: "Birthday",
            address: "Address",
            contact: "Contact Number",
            email: "Email",
            receipt: "Receipt"

        },
        {
            id: 111,
            name: "Chan",
            age: 23,
            gender: "Female",
            birthday: "1998-12-12",
            address: "Pawani, Meda Mawatha, Ella Road, Kurundugaha, Elpitiya.",
            contact: "0789675634",
            email: "chanmahaarachchi@gmail.com",
            receipt: "receipt1.pdf"
        },
        {
            id: "ID",
            name: "Mahaarachchi",
            age: 25,
            gender: "Male",
            birthday: "1997-12-12",
            address: "Piyumi, Meda Mawatha, Ella Road, Kurundugaha, Elpitiya.",
            contact: "0767806547",
            email: "piyumimahaarachchi@gmail.com",
            receipt: "receipt2.pdf"
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
                    <h1>Pending Registrations</h1>
                </header>
                <div className={styled['table-holder']}>
                    {records.map((record) => {
                    return (
                        <RegistrationDetailsTable
                        key={record["id"]}
                        name={record["name"]}
                        age={record["age"]}
                        gender={record["gender"]}
                        birthday={record["birthday"]}
                        address={record["address"]}
                        contact={record["contact"]}
                        email={record["email"]}
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

export default RegistrationList;