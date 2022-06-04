import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import AddMealPlanPage from "../Pages/AddMealPlanPage";
import AddWorkoutPlanPage from "../Pages/AddWorkoutPlanPage";
import MemberProfilePage from "../Pages/MemberProfilePage";


export default function AppRouter(){
    return (
        <Router>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/addMealPlan" element={<AddMealPlanPage/>}/>
                    <Route path="/admin/addWorkoutPlan" element={<AddWorkoutPlanPage/>}/>
                    <Route path="/member/profile" element={<MemberProfilePage/>}/>
                </Routes>
            </React.Fragment>
        </Router>
    );

}