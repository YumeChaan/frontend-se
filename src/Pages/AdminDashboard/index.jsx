import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import fitnessLogo from "../../Resources/Images/company-logo.png";
import AdminList from "../AdminListPage";
import ApproveMonthlyPayment from "../ApproveMonthlyPaymentPage";
import AddAdmin from "../AddAdminPage";
import MemberList from "../MemberListPage";
import ApproveRegistration from "../ApproveRegistrationsPage";
import styles from './index.module.css';
import adminBackgroundImage from "../../Resources/Images/admin-background.jpg";

const drawerWidth = 240;

export default function AdminDashboard() {

    const drawer = (
        <div className={styles['left-container']}>
            <Grid container spacing={2} className={styles['menu-header']}>
            <Grid item xs={5} >
            <div className={styles['img-div']}>
                <img src={fitnessLogo} alt="fitness image" className={styles['fitness-img']} />   
            </div>
            </Grid>
            <Grid item xs={7} className={styles['menu-div']}>
                <br/><br/><br/>
                <label className={styles['company-name']}><span className={styles["company-name-span"]}>24/7</span></label>
                <label className={styles['company-name']}><span>FITNESS</span></label>
                
            </Grid>
       
            </Grid>
    
        
        
        <List >
        <Divider />
        <div className={styles['left-nav']}>

            <div>
                <ListItem key='Admin List' disablePadding>
                    <ListItemButton href="#adminList">
                    <ListItemText primary='Admin List' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Add Admin' disablePadding>
                    <ListItemButton href="#addAdmin">
                    <ListItemText primary='Add Admin' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Member List' disablePadding>
                    <ListItemButton href="#memberList">
                    <ListItemText primary='Member List' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Approve Monthly Payment' disablePadding>
                    <ListItemButton href="#approvePayment">
                    <ListItemText primary='Approve Monthly Payment' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Approve Registrations' disablePadding>
                    <ListItemButton href="#approveRegistration">
                    <ListItemText primary='Approve Registrations' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Meal Plan Requests' disablePadding>
                    <ListItemButton href="#mealPlanRequests">
                    <ListItemText primary='Meal Plan Requests' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Workout Schedule Requests' disablePadding>
                    <ListItemButton href="#workoutScheduleRequests">
                    <ListItemText primary='Workout Schedule Requests' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            

            
            </div>
        </List>
        
        
        </div>
    );
      
    return (
        <Box sx={{ display: 'flex' }}>
            
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
            aria-label="mailbox folders"
            
        >
            
            <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, 
                }}
            open
            >
            {drawer}
            <div className={styles['left-space-container']} />
            <div className={styles['logout-btn']}>
                <ListItem key='Logout' disablePadding>
                    <ListItemButton href="#">
                    <ListItemText primary='Logout' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            </Drawer>
            
        </Box>
        
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundImage: `url(${adminBackgroundImage})` }}
        >
            
            <section id="adminList" ><AdminList /></section>
            <section id="addAdmin"><AddAdmin  /></section>
            <section id="memberList"><MemberList  /></section>
            <section id="approvePayment"><ApproveMonthlyPayment/> </section>
            <section id="approveRegistration"><ApproveRegistration/> </section>
            {/* <section id="approvePayment"><ApproveMonthlyPayment/> </section>
            <section id="approveRegistration"><ApproveRegistration/> </section> */}
            
        </Box>
    </Box>
    );
  }
  