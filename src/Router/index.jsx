import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import MonthlyPaymentPage from "../Pages/MonthlyPaymentPage";
import ApproveMonthlyPayment from "../Pages/ApproveMonthlyPaymentPage";
import AdminList from "../Pages/AdminListPage";
import MemberList from "../Pages/MemberListPage";
import ApproveRegistration from "../Pages/ApproveRegistrationsPage";
import RequestMealPlan from "../Pages/RequestMealPlanPage";
import RequestWorkoutSchedule from "../Pages/RequestWorkoutSchedule"
import AddAdmin from "../Pages/AddAdminPage";
import AdminDashboard from "../Pages/AdminDashboard";
import MemberDashboard from "../Pages/MemberDashboard";


export default function AppRouter(){
    return (
        <Router>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/register" element={<RegisterPage />} exact />
                    <Route path="/login" element={<LoginPage />} exact />
                    <Route path="/member/add-monthly-payment" element={<MonthlyPaymentPage />} exact/>
                    <Route path="/admin/approve-monthly-payment" element={<ApproveMonthlyPayment/>} exact />
                    <Route path="/admin/admin-list" element={<AdminList />} exact />
                    <Route path="/admin/member-list" element={<MemberList />} exact />
                    <Route path="/admin/approve-registration" element={< ApproveRegistration/>} exact />
                    <Route path="/member/request-meal-plan" element={<RequestMealPlan />} exact />
                    <Route path="/member/request-workout-schedule" element={<RequestWorkoutSchedule />} exact />
                    <Route path="/admin/add-admin" element={<AddAdmin />} exact />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} exact />
                    <Route path="/member/dashboard" element={<MemberDashboard />} exact />
                </Routes>
            </React.Fragment>
        </Router>
    );

}