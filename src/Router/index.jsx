import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import MonthlyPaymentPage from "../Pages/MonthlyPaymentPage";
import ApproveMonthlyPayment from "../Pages/ApproveMonthlyPaymentPage";
import AdminList from "../Pages/AdminListPage";
import MemberList from "../Pages/MemberListPage";
import ApproveRegistration from "../Pages/ApproveRegistrationsPage"
import RequestMealPlan from "../Pages/RequestMealPlanPage";
import RequestWorkoutSchedule from "../Pages/RequestWorkoutSchedule"
import AddAdmin from "../Pages/AddAdminPage";


export default function AppRouter(){
    return (
        <Router>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/addMonthlyPayment" element={<MonthlyPaymentPage />} />
                    <Route path="/admin/approveMonthlyPayment" element={<ApproveMonthlyPayment/>}></Route>
                    <Route path="/admin/adminList" element={<AdminList />}></Route>
                    <Route path="/admin/memberList" element={<MemberList />}></Route>
                    <Route path="admin/approveRegistration" element={< ApproveRegistration/>}></Route>
                    <Route path="/request-meal-plan" element={<RequestMealPlan />} />
                    <Route path="/request-workout-schedule" element={<RequestWorkoutSchedule />} />
                    <Route path="/admin/add-admin" element={<AddAdmin />} />
                </Routes>
            </React.Fragment>
        </Router>
    );

}