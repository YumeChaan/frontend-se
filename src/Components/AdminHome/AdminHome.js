import React from "react";

import StatCard from "./StatCard/StatCard";

import styled from "./AdminHome.module.css";

function AdminHome(props) {
  return (
    
    <div className={`container ${styled["main"]}`}>
      <header>
        <h1>{props.admin_name}</h1>
       
      </header>
      <section className={styled['card-container']}>
        <div className={`row`}>
          <div className={`col-6 ${styled["card-style"]}`}>
            <StatCard title="Registered Users" data={props.members} />
          </div>
          <div className={`col-6 ${styled["card-style"]}`}>
            <StatCard title="Admins" data={props.admins}  />
          </div>         
        </div>

        <div className={`row`}>
          <div className={`col-12 ${styled["card-style"]}`}>
            <StatCard title="Pending Registrations" data={props.pendingMembers} />
          </div>
        </div>

        <div className={`row`}>
          
          <div  className={`col-6 ${styled["card-style"]}`}>
            <StatCard title="Pending Payments" data={props.pendingPayment}/>
          </div>
          <div className={`col-6 ${styled["card-style"]}`}>
            <StatCard title="Accepted Payments" data={props.payments} />
          </div>  
        </div>

        <div className={`row`}>
          <div className={`col-6 ${styled["card-style"]}`}>
            <StatCard title="Uploaded Meal Plan Requests" data={props.meal_plans} />
          </div>
          <div className={`col-6 ${styled["card-style"]}`}>
            <StatCard title="Pending Meal Plan Requests" data={props.pendingMelaPlan} />
          </div>
               
        </div>

        <div className={`row`}>
          <div className={`col-6 ${styled["card-style"]}`}>
            <StatCard title="Uploaded WorkOut Plan Requests" data={props.workout_plans} />
          </div>

          <div className={`col-6 ${styled["card-style"]}`}>
            <StatCard title="Pending Workout Plan Requests" data={props.pendingWorkOutPlan} />
          </div>
        </div>
          
          

          
      </section>
    </div>
  );
}

export default AdminHome;
