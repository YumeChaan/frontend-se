import React from 'react'

import AdminHome from '../../Components/AdminHome/AdminHome';

import styled from './index.module.css';

function AdminHomePage(){

    const admin_stats = {
        id: "12321K",
        name: "Piumi Maharachchi",
        num_of_members: 12,
        num_of_admins: 4,
        num_of_payment_req: 6,
        num_of_meal_req: 10,
        num_of_workout_req: 20
    }

    return(
        <AdminHome
            admin_name = {admin_stats['name']}
            admin_id = {admin_stats['id']}
            members = {admin_stats['num_of_members']}
            admins = {admin_stats['num_of_admins']}
            payments = {admin_stats['num_of_payment_req']}
            meal_plans = {admin_stats['num_of_meal_req']}
            workout_plans = {admin_stats['num_of_workout_req']}
        />
    );
}

export default AdminHomePage