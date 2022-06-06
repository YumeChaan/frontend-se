import React from "react";
import Box from '@mui/material/Box';
import styles from './index.module.css';
import AdminSideNavBar from "../../Components/AdminSideNavBar";
import AdminHome from "../AdminHomePage"

const drawerWidth = 240;

export default function AdminDashboard() {
      
    return (
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
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor:"rgba(140, 143, 146, 0.527)" }}
        >
            
            <AdminHome />
            
        </Box>
    </Box>
    );
  }
  