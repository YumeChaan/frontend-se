import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import AdminHomePage from "../Pages/AdminHomePage";


export default function AppRouter(){
    return (
        <Router>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/home" element={<AdminHomePage/>}/>
                </Routes>
            </React.Fragment>
        </Router>
    );

}