import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import MonthlyPaymentPage from "../Pages/MonthlyPaymentPage";
import ApproveMonthlyPayment from "../Pages/ApproveMonthlyPaymentPage";


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
                </Routes>
            </React.Fragment>
        </Router>
    );

}