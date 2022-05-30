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
import AdminDashboard from "../Pages/AdminDashboard";


export default function AppRouter(){
    return (
        <Router>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/register" element={<RegisterPage />} exact />
                    <Route path="/login" element={<LoginPage />} exact />
                    <Route path="/addMonthlyPayment" element={<MonthlyPaymentPage />} />
                    <Route path="/admin/approveMonthlyPayment" element={<ApproveMonthlyPayment/>} />
                    <Route path="/admin/adminList" element={<AdminList />} />
                    <Route path="/admin/memberList" element={<MemberList />} />
                    <Route path="admin/approveRegistration" element={< ApproveRegistration/>} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} exact />
                </Routes>
            </React.Fragment>
        </Router>
    );

}