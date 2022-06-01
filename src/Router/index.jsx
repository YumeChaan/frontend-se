import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
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
import UserProtectedRoute from "../Components/ProtectedRoute/UserProtectedRoute";
import AdminProtectedRoute from "../Components/ProtectedRoute/adminProtectedRoute";
import AuthProtectedRoute from './../Components/ProtectedRoute/AuthProtectedRoute/index';


export default function AppRouter(){
    return (
        <Router>
            <React.Fragment>
                <Switch>
                    <Route path="/" component={HomePage }  exact/>
                    <AuthProtectedRoute path="/register" component={RegisterPage } exact  />
                    <AuthProtectedRoute path="/login" component={LoginPage}  />
                   <UserProtectedRoute
                   path="/member/add-monthly-payment" 
                   component={MonthlyPaymentPage}
                    />
                    
                    <AdminProtectedRoute
                   path="/admin/approve-monthly-payment" 
                   component={ApproveMonthlyPayment}
                    />
                    <AdminProtectedRoute
                   path="/admin/admin-list" 
                   component={AdminList}
                    />
                   
                   <AdminProtectedRoute
                   path="/admin/member-list" 
                   component={MemberList}
                    />
                   
                    <UserProtectedRoute
                   path="/admin/approve-registration" 
                   component={ApproveRegistration}
                    />
                    <UserProtectedRoute
                   path="/member/request-meal-plan" 
                   component={RequestMealPlan}
                    />
                    
                    <UserProtectedRoute
                   path="/member/request-workout-schedule" 
                   component={RequestWorkoutSchedule}
                    />

                    <AdminProtectedRoute
                   path="/admin/add-admin" 
                   component={AddAdmin}
                    />
                 <AdminProtectedRoute
                   path="/admin/dashboard" 
                   component={AdminDashboard}
                    />
                    <UserProtectedRoute
                   path="/member/dashboard" 
                   component={MemberDashboard}
                    />
                    
                </Switch>
            </React.Fragment>
        </Router>
    );

}