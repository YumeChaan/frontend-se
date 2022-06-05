import React from 'react';
import MemberProfile from '../../Components/MemberProfile/MmeberProfile';
import Box from '@mui/material/Box';
import MemberSideNavBar from "../../Components/MemberSideNavBar";
import MemberBackgroundImage from "../../Resources/Images/member-background.jpg";
import 'react-toastify/dist/ReactToastify.css';
import styled from './index.module.css';


const drawerWidth = 240;

function MemberProfilePage(){

    const account_details = {
        id: "121212X",
        name: "Amal",
        address: "Colombo",
        contact_no: "0771212123",
        email: "amalr@gmail.com",
        dob: "2012-12-12"
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
                
                <div className={styled['main-container']}>
                    <main>
                        <div className={`container ${styled["sub-container"]}`}>
                        <MemberProfile
                            id={account_details['id']}
                            name={account_details['name']}
                            address={account_details['address']}
                            contact_no={account_details['contact_no']}
                            email={account_details['email']}
                            dob={account_details['dob']}
                        />
                        </div>
                        
                    </main>
                </div>
            </Box>
        </Box>
        
    );
}

export default MemberProfilePage;