import React from "react";

import StatCard from "./StatCard/StatCard";

import styled from "./AdminHome.module.css";

function AdminHome(props) {
  return (
    <main>
      <header>
        <h1>{props.admin_name}</h1>
       
      </header>
      <section className={styled['card-container']}>
          <StatCard title="Registered Users" data={props.members} />
          <StatCard title="Admins" data={props.admins} />
          <StatCard title="Accepted Payments" data={props.payments} />
          <StatCard title="Uploaded Meal Plans" data={props.meal_plans} />
          <StatCard title="Uploaded WorkOut Plans" data={props.workout_plans} />
          <StatCard title="Pending Workout Plan Requests" data={props.pendingWorkOutPlan} />
          <StatCard title="Pending Meal Plan Requests" data={props.pendingMelaPlan} />
          <StatCard title="Pending Registrations" data={props.pendingMembers} />
          <StatCard title="Pending Payments" data={props.pendingPayment} />
      </section>
    </main>
  );
}

export default AdminHome;
