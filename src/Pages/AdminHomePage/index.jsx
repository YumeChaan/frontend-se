import React,{useEffect,useState} from 'react'

import AdminHome from '../../Components/AdminHome/AdminHome';

import styled from './index.module.css';
import {pendingRegistrtionsCount,acceptedUserCount,pendingMelaPlanRequest,adminProfile,pendingWorkOutPlanCount,uploadedMealPlanCount,uploadedWorkOutPlanCount,pendingPaymentsCount,acceptedPaymentsCount,adminCount} from '../../services/adminServices'
function AdminHomePage(){

    const [name,setName] = useState([]);
    const [email,setEmail] = useState([]);
    const [pendingMembers,setPendingMembersCount] = useState([]);
    const [acceptedMembers,setAcceptedMembersCount] = useState([]);
    const [admin,setAdminCount] = useState([]);
    const [pendingPayments,setPendingPaymentsCount] = useState([]);
    const [pendingMealPlan,setPendingMealPlanCount] = useState([]);
    const [pendingWorkOutPlan,setPendingWorkOutPlanCount] = useState([]);
    const [uploadedWorkOutPlan,setUploadedworkoutPlanCount] = useState([]);
    const [uploadedMealPlan,setuploadedMealPlanCount] = useState([]);
    const [acceptedPayments,setAcceptedPaymentsCount] = useState([]);


    useEffect(() => {
        async function setStats() {
      
        var result1 = await adminProfile();
      setName(result1.data['Name'])
      var result2 = await adminProfile();
      setEmail(result2.data['email'])
      var result3 = await pendingMelaPlanRequest();
      setPendingMealPlanCount(result3.data[0]['noOfMealPlanPending'])
      var result4 = await pendingRegistrtionsCount();
      setPendingMembersCount(result4.data[0]['noOfPendingRegistrations']);
      var result5 = await pendingWorkOutPlanCount();
      setPendingWorkOutPlanCount(result5.data[0]['noOfWorkOutPlanPending']);
      var result6 = await pendingPaymentsCount();
      setPendingPaymentsCount(result6.data[0]['noOfpaymentCount']);
      var result7 = await acceptedUserCount();
      setAcceptedMembersCount(result7.data[0]['noOfRegistrations']);
      var result8 = await acceptedPaymentsCount();
      setPendingPaymentsCount(result8.data[0]['noOfpaymentCount']);
      var result9 = await uploadedMealPlanCount();
      setuploadedMealPlanCount(result9.data[0]['noOfmealPlanUploaded']);
      var result10 = await uploadedWorkOutPlanCount();
      setUploadedworkoutPlanCount(result10.data[0]['noOfWorkOutPlanUploaded']);
      var result11 = await adminCount();
      setAdminCount(result11.data[0]['noOfAdminCount']);
      var result12 = await acceptedPaymentsCount();
      setAcceptedPaymentsCount(result12.data[0]['noOfpaymentCount']);
      console.log(result3)
        }
        
        setStats();
      },[]);

    return(
        <AdminHome
            admin_name = {name}
            admin_id = {email}
            members = {acceptedMembers}
            admins = {admin}
            payments = {acceptedPayments}
            meal_plans = {uploadedMealPlan}
            workout_plans = {uploadedWorkOutPlan}
            pendingMembers={pendingMembers}
            pendingPayment={pendingPayments}
            pendingWorkOutPlan={pendingWorkOutPlan}
            pendingMealPlan={pendingMealPlan}
            pendingMelaPlan={pendingMealPlan}
           
          
            
        />
    );
}

export default AdminHomePage