import React,{useState,useEffect} from 'react';
import MemberProfile from '../../Components/MemberProfile/MmeberProfile';
import Box from '@mui/material/Box';
import MemberSideNavBar from "../../Components/MemberSideNavBar";
import MemberBackgroundImage from "../../Resources/Images/member-background.jpg";
import 'react-toastify/dist/ReactToastify.css';
import styled from './index.module.css';
import {viewProfile} from '../../services/userServices'

const drawerWidth = 240;

function MemberProfilePage(){
    const [account_details,setDetails] = useState([]);
    // const [Name,username,email,birthday,address,mobileNo]= account_details;
   
    useEffect(() => {
        async function getProfile() {
          const result = await viewProfile();
          setDetails(result.data);
        }
    
        getProfile();
      },[]);
    //   console.log(account_details['username'])
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
                            id={account_details['username']}
                            name={account_details['Name']}
                            address={account_details['address']}
                            contact_no={account_details['mobileNo']}
                            email={account_details['email']}
                            dob={account_details['birthday']}
                        />
                        </div>
                        
                    </main>
                </div>
            </Box>
        </Box>
        
    );
}

export default MemberProfilePage;