import React from "react";
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import fitnessLogo from "../../Resources/Images/company-logo.png";
import styles from './index.module.css';


const drawerWidth = 240;


export default function AdminSideNavBar() {

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
                    <ListItemButton href="./admin-list">
                    <ListItemText primary='Admin List' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Add Admin' disablePadding>
                    <ListItemButton href="./add-admin">
                    <ListItemText primary='Add Admin' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Member List' disablePadding>
                    <ListItemButton href="./member-list">
                    <ListItemText primary='Member List' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Approve Monthly Payment' disablePadding>
                    <ListItemButton href="./approve-monthly-payment">
                    <ListItemText primary='Approve Monthly Payment' />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </div>
            <div>
                <ListItem key='Approve Registrations' disablePadding>
                    <ListItemButton href="./approve-registration">
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
      <div>
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
      </div>
    );
  }
  